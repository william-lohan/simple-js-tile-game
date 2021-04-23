import { TmxData } from './data';

export class TmxImage {

  /**
   * @type {string}
   */
  format;

  /**
   * @type {string}
   */
  id;

  /**
  * @type {string}
  */
  source;

  /**
   * @type {string}
   */
  trans;

  /**
   * @type {number}
   */
  width;

  /**
   * @type {number}
   */
  height;

  /**
   * @type {TmxData}
   */
  data;

  relativeUrl;

  /**
   * @param {Element} element
   * @param {string} relativeUrl
   * @returns {TmxImage}
   */
  static fromElement(element, relativeUrl) {
    const newImage = new TmxImage();
    newImage.format = element.getAttribute('format');
    newImage.id = element.getAttribute('id');
    newImage.source = element.getAttribute('source');
    newImage.trans = element.getAttribute('trans');
    newImage.width = parseInt(element.getAttribute('width'), 10);
    newImage.height = parseInt(element.getAttribute('height'), 10);
    newImage.data = [...element.getElementsByTagName('data')].map(element => {
      return TmxData.fromElement(element);
    })[0]; // one
    newImage.relativeUrl = relativeUrl;
    return newImage;
  }

  async loadSource() {
    const url = joinPath(this.relativeUrl, this.source);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'image/*'
      }
    });
    return await response.blob();
  }

}

/**
 * A simple analog of Node.js's `path.join(...)`.
 * https://gist.github.com/creationix/7435851#gistcomment-3698888
 * @param  {...string} segments
 * @return {string}
 */
function joinPath(...segments) {
  const parts = segments.reduce((parts, segment) => {
    // Remove leading slashes from non-first part.
    if (parts.length > 0) {
      segment = segment.replace(/^\//, '')
    }
    // Remove trailing slashes.
    segment = segment.replace(/\/$/, '')
    return parts.concat(segment.split('/'))
  }, [])
  const resultParts = []
  for (const part of parts) {
    if (part === '.') {
      continue
    }
    if (part === '..') {
      resultParts.pop()
      continue
    }
    resultParts.push(part)
  }
  return resultParts.join('/')
}

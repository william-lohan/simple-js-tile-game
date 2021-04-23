import { TmxImage } from './image';

export class TmxTile {

  /**
   * @type {number}
   */
  id;

  type;

  terrain;

  /**
   * @type {number}
   * @default 0
   */
  probability;

  /**
   * @type {TmxImage}
   */
  image;

  /**
   * @param {Element} element
   * @param {string} relativeUrl
   * @returns {TmxTile}
   */
  static fromElement(element, relativeUrl) {
    const newTile = new TmxTile();
    newTile.id = parseInt(element.getAttribute('id'), 10);
    newTile.type = element.getAttribute('type');
    newTile.terrain = element.getAttribute('terrain');
    newTile.probability = parseInt(element.getAttribute('probability') || 0, 10);
    newTile.image = [...element.getElementsByTagName('image')].map(element => {
      return TmxImage.fromElement(element, relativeUrl);
    })[0]; // one
    return newTile;
  }

}

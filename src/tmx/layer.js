import { TmxProperties } from './properties';
import { TmxData } from './data';

/**
 * https://doc.mapeditor.org/en/stable/reference/tmx-map-format/#layer
 */
export class TmxLayer {

  /**
   * @type {string}
   */
  id;

  /**
   * @type {string}
   * @default ""
   */
  name;

  /**
   * @type {number}
   * @default 0
   */
  x;

  /**
   * @type {number}
   * @default 0
   */
  y;

  /**
   * @type {number}
   */
  width;

  /**
   * @type {number}
   */
  height;

  /**
   * @type {number}
   * @default 1
   */
  opacity;

  /**
   * @type {number}
   * @default 1
   */
  visible;

  tintcolor;

  /**
   * @type {number}
   * @default 0
   */
  offsetx;

  /**
   * @type {number}
   * @default 0
   */
  offsety;

  /**
   * @type {number}
   * @default 1
   */
  parallaxx;

  /**
   * @type {number}
   * @default 1
   */
  parallaxy;

  /**
   * @type {TmxProperties}
   */
  properties;

  /**
   * @type {TmxData}
   */
  data;

  /**
   * @param {Element} element
   * @returns {TmxLayer}
   */
  static fromElement(element) {
    const newLayer = new TmxLayer();
    newLayer.id = element.getAttribute('id');
    newLayer.name = element.getAttribute('name') || '';
    newLayer.x = parseInt(element.getAttribute('x') || 0, 10);
    newLayer.y = parseInt(element.getAttribute('y') || 0, 10);
    newLayer.width = parseInt(element.getAttribute('width'), 10);
    newLayer.height = parseInt(element.getAttribute('height'), 10);
    newLayer.opacity = parseInt(element.getAttribute('opacity') || 1, 10);
    newLayer.visible = parseInt(element.getAttribute('visible') || 1, 10);
    newLayer.tintcolor = element.getAttribute('tintcolor');
    newLayer.offsetx = parseInt(element.getAttribute('offsetx') || 0, 10);
    newLayer.offsety = parseInt(element.getAttribute('offsety') || 0, 10);
    newLayer.parallaxx = parseInt(element.getAttribute('parallaxx') || 1, 10);
    newLayer.parallaxy = parseInt(element.getAttribute('parallaxy') || 1, 10);
    newLayer.properties = [...element.getElementsByTagName('properties')].map(element => {
      return new TmxProperties(element);
    })[0]; // one
    newLayer.data = [...element.getElementsByTagName('data')].map(element => {
      return TmxData.fromElement(element);
    })[0]; // one
    return newLayer;
  }

}

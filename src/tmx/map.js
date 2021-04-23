import { loadXML } from '../xml/xml';
import { TmxProperties } from './properties';
import { TmxTileset } from './tileset';
import { TmxTile } from './tile';
import { TmxLayer } from './layer';

export class TmxMap {

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
   */
  tilewidth;

  /**
   * @type {number}
   */
  tileheight;

  /**
   * @type {TmxProperties}
   */
  properties;

  /**
   * @type {TmxTileset[]}
   */
  tilesets;

  /**
   * @type {TmxLayer[]}
   */
  layers;

  /**
   * @param {Element} element
   * @param {string} relativeUrl
   * @returns {TmxMap}
   */
  static async fromElement(element, relativeUrl) {
    const newMap = new TmxMap();
    newMap.width = parseInt(element.getAttribute('width'), 10);
    newMap.height = parseInt(element.getAttribute('height'), 10);
    newMap.tilewidth = parseInt(element.getAttribute('tilewidth'), 10);
    newMap.tileheight = parseInt(element.getAttribute('tileheight'), 10);
    newMap.properties = [...element.getElementsByTagName('properties')].map(element => {
      return new TmxProperties(element);
    })[0]; // one
    newMap.tilesets = await Promise.all([...element.getElementsByTagName('tileset')].map(element => {
      const source = element.getAttribute('source');
      return TmxTileset.fromUrl(relativeUrl.trimEnd('/') + '/' + source);
    }));
    newMap.layers = [...element.getElementsByTagName('layer')].map(element => {
      return TmxLayer.fromElement(element);
    });
    newMap.objectgroup = [...element.getElementsByTagName('objectgroup')].map(element => {
      return element;
    });
    newMap.imagelayers = [...element.getElementsByTagName('imagelayer')].map(element => {
      return element;
    });
    newMap.groups = [...element.getElementsByTagName('group')].map(element => {
      return element;
    });
    newMap.editorsettings = [...element.getElementsByTagName('editorsettings')].map(element => {
      return element;
    });
    return newMap;
  }

  /**
   * @param {string} url
   * @returns {Promise<TmxMap>}
   */
  static async fromUrl(url) {
    const relative = url.split('/')
    relative.pop();
    const document = await loadXML(url);
    return TmxMap.fromElement(document.getElementsByTagName('map')[0], relative.join('/'));
  }

  /**
   * @param {number} id
   * @returns {{ tileset: TmxTileset, tile: TmxTile }}
   */
  findTile(id) {
    let tileset, tile;
    this.tilesets.forEach(ts => {
      tile = ts.tiles.find(t => {
        return t.id === id;
      });
      if (tile) {
        tileset = ts;
        // break;
      }
    });
    return { tileset, tile };
  }

}
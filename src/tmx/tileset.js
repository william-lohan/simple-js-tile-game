import { loadXML } from '../xml/xml';
import { TmxGrid } from './grid';
import { TmxTile } from './tile';

export class TmxTileset {

  /**
   * @type {string}
   */
  firstgid;

  /**
   * @type {string}
   */
  source;

  /**
   * @type {string}
   */
  name;

  /**
   * @type {number}
   */
  tilewidth;

  /**
   * @type {number}
   */
  tileheight;

  /**
   * @type {number}
   */
  tilecount;

  /**
   * @type {number}
   */
  columns;

  /**
   * @type {TmxGrid}
   */
  grid;

  /**
   * @type {TmxTile[]}
   */
  tiles;

  /**
   * @param {Element} element
   * @param {string} relativeUrl
   * @returns {TmxTileset}
   */
  static fromElement(element, relativeUrl) {
    const newTileset = new TmxTileset();
    newTileset.firstgid = element.getAttribute('firstgid');
    newTileset.source = element.getAttribute('source');
    newTileset.name = element.getAttribute('name');
    newTileset.tilewidth = parseInt(element.getAttribute('tilewidth'), 10);
    newTileset.tileheight = parseInt(element.getAttribute('tileheight'), 10);
    newTileset.tilecount = parseInt(element.getAttribute('tilecount'), 10);
    newTileset.columns = parseInt(element.getAttribute('columns'), 10);
    newTileset.grid = [...element.getElementsByTagName('grid')].map(element => {
      return TmxGrid.fromElement(element);
    })[0]; // one
    newTileset.tiles = [...element.getElementsByTagName('tile')].map(element => {
      return TmxTile.fromElement(element, relativeUrl);
    });
    return newTileset;
  }

  /**
   * @param {string} url
   * @returns {Promise<TmxTileset>}
   */
  static async fromUrl(url) {
    const relative = url.split('/')
    relative.pop();
    const document = await loadXML(url);
    return TmxTileset.fromElement(document.getElementsByTagName('tileset')[0], relative.join('/'));
  }

}

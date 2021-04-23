import { TmxTilelayerTile } from './tilelayer-tile.js'

export class TmxData {

  /**
   * @type {"base64" | "csv"}
   */
  encoding;

  /**
   * @type {"gzip" | "zlib" | "zstd"}
   */
  compression;

  /**
   * @type {TmxTilelayerTile[]}
   */
  tiles;

  chunks;

  content;

  /**
   * @param {Element} element
   * @returns {TmxData}
   */
  static fromElement(element) {
    const newData = new TmxData();
    newData.encoding = element.getAttribute('encoding');
    newData.compression = element.getAttribute('compression');
    newData.tiles = [...element.getElementsByTagName('tile')].map(element => {
      return TmxTilelayerTile.fromElement(element);
    });
    newData.content = element.textContent.trim();
    return newData;
  }

  /**
   * @returns {number[][]}
   */
  csv() {
    return this.content.split('\n').map(row => {
      return row.replace(/,$/, '').split(',').map(v => {
        const cell = parseInt(v.trim(), 10);
        return cell;
      });
    });
  }

}

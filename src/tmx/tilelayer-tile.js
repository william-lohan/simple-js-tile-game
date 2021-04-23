
/**
 * https://doc.mapeditor.org/en/stable/reference/tmx-map-format/#tmx-tilelayer-tile
 */
export class TmxTilelayerTile {

  /**
   * @type {number}
   */
  gid;

  /**
   * @param {Element} element
   * @returns {TmxTilelayerTile}
   */
  static fromElement(element) {
    const newTile = new TmxTilelayerTile();
    newTile.gid = parseInt(element.getAttribute('gid') || 0, 10);
    return newTile;
  }

}

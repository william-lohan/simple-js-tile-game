
import { AssetManager } from './asset-manager';

export class TileManager extends AssetManager {

  tileSets = new Map();

  async getAsset(id) {
    // TODO
    return;
  }

  /**
   * @param {*} tileSet 
   * @param {number} [firstGid=1] 
   */
  addTileSet(tileSet, firstGid = 1) {
    this.tileSets.set(path, tileSet);
    if (tileSet.image && tileSet.image.length) {
      // TODO
    }
  }

}

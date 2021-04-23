import { TmxMap } from '../tmx/map';
import { GameNode } from './game-node';
import { LayerNode } from './layer-node';
import { TmxLayer } from '../tmx/layer';
import { TmxTileset } from '../tmx/tileset';
import { TmxTile } from '../tmx/tile';

export class TileNode extends GameNode {

  /**
   * @type {TmxTile}
   */
  tile;

  /**
  * @type {TmxTileset}
  */
  tileset;

  /**
   * @type {TmxMap}
   */
  map;

  /**
   * @type {ImageBitmap}
   */
  imageBitmap;

  /**
   * @type {MapNode}
   */
  tileMap;

  /**
   * @type {LayerNode}
   */
  layer;

  /**
   * @type {number}
   */
  gid;

  /**
   * @param {TmxTile} tile 
   * @param {TmxTileset} tileset 
   * @param {TmxMap} map 
   * @param {number} x 
   * @param {number} y 
   * @returns {TileNode}
   */
  static fromTmxTile(tile, tileset, map, x, y) {
    const newNode = new TileNode();
    newNode.tile = tile;
    newNode.tileset = tileset;
    newNode.map = map;
    newNode.x = x;
    newNode.y = y;
    newNode.w = tileset.tilewidth;
    newNode.h = tileset.tileheight;
    return newNode;
  }

  /**
   * @param {MapNode} map
   * @param {LayerNode} layer
   * @param {number} x 
   * @param {number} y 
   * @param {number} gid
   * @returns {TileNode}
   */
  static fromTileId(map, layer, x, y, gid) {
    const newNode = new TileNode();
    newNode.tileMap = map;
    newNode.layer = layer;
    newNode.x = x;
    newNode.y = y;
    newNode.w = map.tileWidth;
    newNode.h = map.tileHeight;
    newNode.gid = gid
    return newNode;
  }

  async load(assets) {
    if (this.tile) {
      const blob = await this.tile.image.loadSource();
      this.imageBitmap = await createImageBitmap(blob);
    }
    if (this.gid) {
      // TODO
    }
    await super.load(assets);
  }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  render(context) {
    const x = this.relativeX();
    const y = this.relativeY();
    if (this.tile) {
      context.drawImage(this.imageBitmap, x, y, this.w, this.h);
    }
    if (this.gid) {
      // TODO
    }
    super.render(context);
  }

}

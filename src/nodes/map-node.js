import { TmxMap } from '../tmx/map';
import { GameNode } from './game-node';
import { LayerNode } from './layer-node';

export class MapNode extends GameNode {

  /**
   * @type {TmxMap}
   */
  map;

  /**
   * @type {number}
   */
  tileWidth;

  /**
   * @type {number}
   */
  tileHeight;

  /**
   * @param {TmxMap} map 
   * @returns {MapNode}
   */
  static fromTmxMap(map) {
    const newNode = new MapNode();
    newNode.map = map;
    newNode.w = map.width * map.tilewidth;
    newNode.h = map.height * map.tileheight;
    newNode.tileWidth = map.tilewidth;
    newNode.tileHeight = map.tileheight;
    newNode.map.layers.forEach(layer => {
      this.appendChild(LayerNode.fromTmxLayer(layer, this.map));
    });
    return newNode;
  }

  /**
   * @param {*} map 
   * @returns {MapNode}
   */
  static fromTileMap(map) {
    const newNode = new MapNode();
    newNode.w = map.width * map.tilewidth;
    newNode.h = map.height * map.tileheight;
    newNode.tileWidth = map.tilewidth;
    newNode.tileHeight = map.tileheight;
    map.layerOrObjectgroup.forEach(layer => {
      newNode.appendChild(LayerNode.fromTileLayer(this, layer));
    });
    return newNode;
  }

  async load(assets) {
    const tileMgr = assets.get('tile');
    // TODO
    super.load(assets);
  }

}

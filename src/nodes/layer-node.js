import { TmxMap } from '../tmx/map';
import { TmxLayer } from '../tmx/layer';
import { TmxTileset } from '../tmx/tileset';
import { TmxTile } from '../tmx/tile';
import { GameNode } from './game-node';
import { TileNode } from './tile-node';

export class LayerNode extends GameNode {

  /**
   * @type {TmxLayer}
   */
  layer;

  /**
   * @type {TmxMap}
   */
  map;

  /**
   * @type {MapNode}
   */
  tileMap;

  /**
   * @returns {number[][]}
   */
  getMatrix() {
    if (this.layer.data.encoding) {
      if (this.layer.data.encoding === 'csv') {
        return this.layer.data.csv();
      } else {
        throw Error('only support csv at this time');
      }
    }
    // tile fallback
    const matrix = [];
    for (let y = 0; y < this.layer.height; y++) {
      matrix[y] = [];
      for (let x = 0; x < this.layer.width; x++) {
        matrix[y][x] = this.layer.data.tiles[x + (y * this.layer.width)].gid;
      }
    }
    return matrix;
  }

  static getTilesFromData(layer) {
    if (layer.data.encoding) {
      if (layer.data.encoding === 'csv') {
        return layer.data.content[0].split('\n').map(row => {
          return row.replace(/,$/, '').split(',').map(v => {
            const cell = parseInt(v.trim(), 10);
            return cell;
          });
        });
      } else {
        throw Error('only support csv at this time');
      }
    }
    // tile fallback
    const matrix = [];
    for (let y = 0; y < layer.height; y++) {
      matrix[y] = [];
      for (let x = 0; x < layer.width; x++) {
        matrix[y][x] = layer.data.tiles[x + (y * layer.width)].gid;
      }
    }
    return matrix;
  }

  /**
   * @param {TmxLayer} layer
   * @param {TmxMap} map
   * @returns {LayerNode}
   */
  static fromTmxLayer(layer, map) {
    const newNode = new LayerNode('LayerNode:' + layer.id);
    newNode.layer = layer;
    newNode.map = map;
    newNode.x = layer.x;
    newNode.y = layer.y;
    newNode.w = layer.width * newNode.map.tilewidth;
    newNode.h = layer.height * newNode.map.tileheight;
    const matr = newNode.getMatrix();
    matr.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          const { tileset, tile } = newNode.map.findTile(cell - 1);
          if (tile) {
            newNode.appendChild(TileNode.fromTmxTile(tile, tileset, newNode.map, newNode.map.tilewidth * x, newNode.map.tileheight * y));
          }
        }
      });
    });
  }

  /**
   * @param {MapNode} map
   * @param {*} layer
   * @returns {LayerNode}
   */
  static fromTileLayer(map, layer) {
    const newNode = new LayerNode('LayerNode:' + layer.name);
    newNode.tileMap = map;
    newNode.x = layer.x || 0;
    newNode.y = layer.y || 0;
    newNode.w = layer.width * map.tilewidth;
    newNode.h = layer.height * map.tileHeight;
    const matr = LayerNode.getTilesFromData(layer);;
    matr.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          newNode.appendChild(TileNode.fromTileId(map, this, x, y, cell));
        }
      });
    });
    return newNode;
  }

}

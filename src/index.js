import { TmxMap } from './tmx/map';
import { Game } from './game';
import { MyControlNode } from './my-control-node';
import { ImageBitmapNode } from './nodes/image-bitmap-node';
import { ImageDataNode } from './nodes/image-data-node';
import { MapNode } from './nodes/map-node';
import { TileManager } from './tile-manager';

import level1 from '../assets/maps/a-platformer-in-the-forest.tmx';
import level1Tiles from '../assets/maps/sheet.tsx';

(async () => {

  const appCanvas = document.getElementById('app-canvas');
  const context = appCanvas.getContext('2d');

  const game = new Game(context);

  // const map = await TmxMap.fromUrl('/assets/maps/map1.tmx');
  // const mapNode = MapNode.fromTmxMap(map);
  // game.root.appendChild(mapNode);
  // game.root.appendChild(new MyControlNode());
  // await game.load();

  const mapNode = MapNode.fromTileMap(level1.value);
  game.root.appendChild(mapNode);

  const tileMgr = new TileManager();
  tileMgr.addTileSet(level1Tiles.value);
  game.assets.set('tile', tileMgr);

  await game.load();

  const frame = (time) => {
    game.tick(1);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

})();

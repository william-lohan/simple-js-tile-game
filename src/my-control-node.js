import { TmxMap } from './tmx/map';
import { GameNode } from './nodes/game-node';
import { MapNode } from './nodes/map-node';

export class MyControlNode extends GameNode {

  direction = 1;

  update(delta) {
    const map = this.parent.children.find(child => child instanceof MapNode);
    map.x = map.x + this.direction;
    if (map.x > 50) {
      this.direction = -1;
    }
    if (map.x < -50) {
      this.direction = 1;
    }
  }

}

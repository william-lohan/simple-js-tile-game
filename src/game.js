import { GameNode } from './nodes/game-node';

export class Game {

  /**
   * @type {CanvasRenderingContext2D}
   */
  contex;

  /**
   * @type {GameNode}
   */
  root = new GameNode();

  assets = new Map();

  /**
   * @param {CanvasRenderingContext2D} contex 
   */
  constructor(contex) {
    this.contex = contex;
    this.root.w = this.contex.canvas.width;
    this.root.h = this.contex.canvas.height;
  }

  async load() {
    await this.root.load(this.assets);
  }

  /**
   * @param {number} delta
   */
  tick(delta) {
    this.contex.clearRect(0, 0, this.contex.canvas.width, this.contex.canvas.height);
    this.contex.drawImage
    this.root.update(delta);
    this.root.render(this.contex);
  }

}

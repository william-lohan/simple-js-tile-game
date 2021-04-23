import { GameNode } from './game-node';

export class ImageDataNode extends GameNode {

  /**
   * @type {ImageData}
   */
  imageData;

  // constructor() {
  //   super();
  // }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  render(context) {
    context.putImageData(this.imageData, this.x, this.y, 0, 0, this.w, this.h);
    super.render(context);
  }

}

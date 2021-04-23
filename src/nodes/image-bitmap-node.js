import { GameNode } from './game-node';

export class ImageBitmapNode extends GameNode {

  /**
   * @type {ImageBitmap}
   */
  imageBitmap;

  // constructor() {
  //   super();
  // }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  render(context) {
    context.drawImage(this.imageBitmap, this.x, this.y, this.w, this.h);
    super.render(context);
  }

}


export class TmxGrid {

  /**
   * @type {"orthogonal" | "isometric"}
   * @default "orthogonal"
   */
  orientation;

  /**
   * @type {number}
   */
  width;

  /**
   * @type {number}
   */
  height;

  /**
  * @param {Element} element
  * @returns {TmxGrid}
  */
  static fromElement(element) {
    const newGrid = new TmxGrid();
    newGrid.orientation = element.getAttribute('orientation');
    newGrid.width = parseInt(element.getAttribute('width'), 10);
    newGrid.height = parseInt(element.getAttribute('height'), 10);
    return newGrid;
  }

}

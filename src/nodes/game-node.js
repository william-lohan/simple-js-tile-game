
let gameNodeId = 0;

export class GameNode {

  /**
   * @type {string}
   */
  id;

  /**
   * @type {number}
   */
  x = 0;

  /**
   * @type {number}
   */
  y = 0;

  /**
   * @type {number}
   */
  w = 0;

  /**
   * @type {number}
   */
  h = 0;

  /**
   * @type {boolean}
   */
  fixed = false;

  /**
   * @type {GameNode | undefined}
   */
  parent;

  /**
   * @type {GameNode[]}
   */
  children = [];

  /**
   * @param {string} [id]
   */
  constructor(id = ('GameNode:' + gameNodeId++)) {
    this.id = id;
  }

  /**
   * @param {GameNode} child
   */
  appendChild(child) {
    child.parent = this;
    this.children.push(child);
  }

  /**
   * @returns {number}
   */
  relativeX() {
    return this.x + (this.parent ? this.parent.relativeX() : 0);
  }

  /**
   * @returns {number}
   */
  relativeY() {
    return this.y + (this.parent ? this.parent.relativeY() : 0);
  }

  async load(assets) {
    await Promise.all(this.children.map(child => {
      return child.load(assets);
    }));
  }

  /**
   * @param {number} delta
   */
  update(delta) {
    this.children.forEach(child => {
      child.update(delta);
    });
  }

  /**
   * @param {CanvasRenderingContext2D} contex
   */
  render(contex) {
    this.children.forEach(child => {
      child.render(contex);
    });
  }

}

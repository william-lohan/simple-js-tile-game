
export class TmxProperties {

  properties;

  /**
   * @param {Element} element 
   */
  constructor(element) {
    properties = [...element.getElementsByTagName('property')].map(element => {
      return element;
    });
  }

}


const attributeKey = 'attribute';

const childKey = 'child';

const childrenKey = 'children';

const tagKey = 'tag';

/**
 * @type {WeakMap<Object, Map<string, *>>}
 */
const metadataStore = WeakMap();

/**
 * @callback AttributeFactory
 * @param {string} value 
 * @returns {*}
 */

/**
 * @param {string} name 
 * @param {AttributeFactory} [factory] 
 * @returns {PropertyDecorator}
 */
export function attribute(name, factory) {
  return (target, key) => {
    let targetStore = metadataStore.get(target);
    if (!targetStore) {
      targetStore = new Map();
    }
    targetStore.set(`${key}-${attributeKey}`, { name, factory });
    metadataStore.set(target, targetStore);
  };
}

/**
 * @param {Object} target 
 * @param {string} key 
 * @returns {{ name: string, [factory]: AttributeFactory }}
 */
export function getAttribute(target, key) {
  metadataStore.get(target)?.get(`${key}-${attributeKey}`);
}

/**
 * @param {string} tagName 
 * @param {Function} type
 * @returns {PropertyDecorator}
 */
export function child(tagName, type) {
  return (target, key) => {
    let targetStore = metadataStore.get(target);
    if (!targetStore) {
      targetStore = new Map();
    }
    targetStore.set(`${key}-${childKey}`, { tagName, type });
    metadataStore.set(target, targetStore);
  };
}

/**
 * @param {Object} target 
 * @param {string} key 
 * @returns {{ tagName: string, type: Function }}
 */
export function getChild(target, key) {
  metadataStore.get(target)?.get(`${key}-${childKey}`);
}

/**
 * @param {string} tagName 
 * @param {Function} type
 * @returns {PropertyDecorator}
 */
export function children(tagName, type) {
  return (target, key) => {
    let targetStore = metadataStore.get(target);
    if (!targetStore) {
      targetStore = new Map();
    }
    targetStore.set(`${key}-${childrenKey}`, { tagName, type });
    metadataStore.set(target, targetStore);
  };
}

/**
 * @param {Object} target 
 * @param {string} key 
 * @returns {{ tagName: string, type: Function }}
 */
export function getChildren(target, key) {
  metadataStore.get(target)?.get(`${key}-${childrenKey}`);
}

/**
 * @param {string} tagName
 * @returns {ClassDecorator}
 */
export function children(tagName) {
  return (target) => {
    let targetStore = metadataStore.get(target);
    if (!targetStore) {
      targetStore = new Map();
    }
    targetStore.set(tagKey, tagName);
    metadataStore.set(target, targetStore);
  };
}

/**
 * @param {Object} target
 * @returns {string} tagName
 */
export function getChildren(target) {
  metadataStore.get(target)?.get(tagKey);
}

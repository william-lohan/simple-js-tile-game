
/**
 * @param {string} url 
 * @returns {XMLDocument}
 */
export async function loadXML(url) {
  const response = await fetch(url, {
    method: 'GET'
  });
  const result = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(result, 'text/xml');
}

/**
 * @param {Document} document 
 * @param {Function} rootType 
 */
export function deserializeRoot(document, rootType) {
  const root = document.getRootNode();
  // TODO
}

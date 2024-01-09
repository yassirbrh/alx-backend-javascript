const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 0);
  }
  const value = weakMap.get(endpoint);
  weakMap.set(endpoint, value + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };

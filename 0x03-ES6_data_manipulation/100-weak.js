const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 0);
  } else if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  const value = weakMap.get(endpoint);
  weakMap.set(endpoint, value + 1);
  return weakMap;
}

export { weakMap, queryAPI };

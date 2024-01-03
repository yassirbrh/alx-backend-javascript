export default function appendToEachArrayValue(array, appendString) {
  for (const word of array) {
    const idx = array.indexOf(word);
    array[idx] = appendString + word; // eslint-disable-line no-param-reassign
  }

  return array;
}

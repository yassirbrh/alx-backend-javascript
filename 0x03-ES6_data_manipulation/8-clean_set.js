export default function cleanSet(set, startString) {
  let output = '';
  if (startString.length === 0) {
    return output;
  }
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      output += `${elem.substring(startString.length)}-`;
    }
  }
  return output.substring(0, output.length - 1);
}

export default function cleanSet(set, startString) {
  const output = [];
  for (const elem of set.values()) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      if (elem.substring(startString.length) !== elem) {
        output.push(elem.substring(startString.length));
      }
    }
  }
  return output.join('-');
}

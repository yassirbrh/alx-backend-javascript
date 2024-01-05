export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](dataType) {
    if (dataType === 'number') {
      return this._size;
    }
    if (dataType === 'string') {
      return this._location;
    }
    return this.toString();
  }
}

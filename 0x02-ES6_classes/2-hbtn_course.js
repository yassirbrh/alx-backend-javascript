export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (Array.isArray(students)) {
      for (let i = 0; i < students.length; i += 1) {
        if (typeof students[i] !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      }
    } else {
      throw TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'string') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(arr) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'string') {
          throw TypeError('Students must be an array of strings');
        }
      }
    } else {
      throw TypeError('Students must be an array of strings');
    }
    this._students = arr;
  }
}

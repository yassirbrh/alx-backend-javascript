#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('test 1', () => {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
  });
  it('test 2', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 2.4), 3);
  });
  it('test 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1.6, 3.6), 6);
  });
  it('test 4', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('test 5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('test 6', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('test 7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2), 0);
  });
  it('test 8', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.6), -1);
  });
  it('test 9', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3), 1);
  });
  it('test 10', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3), 3);
  });
  it('test 11', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.2, 3), 2);
  });
  it('test 12', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.3, 0.1), 'Error');
  });
  it('test 13', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.7, 3), 3);
  });
  it('test 14', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.6, 9), 1);
  });
  it('test 15', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.1, 1.9), 1.5);
  });
});

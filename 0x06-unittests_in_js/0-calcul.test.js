#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('test 1', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('test 2', () => {
    assert.strictEqual(calculateNumber(1.2, 2.4), 3);
  });
  it('test 3', () => {
    assert.strictEqual(calculateNumber(1.6, 3.6), 6);
  });
  it('test 4', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('test 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('test 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});

#!/usr/bin/node

const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('test 1', () => {
    expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
  });
  it('test 2', () => {
    expect(calculateNumber('SUM', 1.2, 2.4)).to.equal(3);
  });
  it('test 3', () => {
    expect(calculateNumber('SUM', 1.6, 3.6)).to.equal(6);
  });
  it('test 4', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('test 5', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('test 6', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('test 7', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 2)).to.equal(0);
  });
  it('test 8', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 2.6)).to.equal(-1);
  });
  it('test 9', () => {
    expect(calculateNumber('SUBTRACT', 3.5, 3)).to.equal(1);
  });
  it('test 10', () => {
    expect(calculateNumber('SUBTRACT', 5.5, 3)).to.equal(3);
  });
  it('test 11', () => {
    expect(calculateNumber('DIVIDE', 6.2, 3)).to.equal(2);
  });
  it('test 12', () => {
    expect(calculateNumber('DIVIDE', 6.3, 0.1)).to.equal('Error');
  });
  it('test 13', () => {
    expect(calculateNumber('DIVIDE', 8.7, 3)).to.equal(3);
  });
  it('test 14', () => {
    expect(calculateNumber('DIVIDE', 8.6, 9)).to.equal(1);
  });
  it('test 15', () => {
    expect(calculateNumber('DIVIDE', 3.1, 1.9)).to.equal(1.5);
  });
});

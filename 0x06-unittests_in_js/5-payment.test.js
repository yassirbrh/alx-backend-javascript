#!/usr/bin/node

const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });
  it('the function sendPaymentRequestToApi should console 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledWith('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
  it('the function sendPaymentRequestToApi should console 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.calledWith('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});

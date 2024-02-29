#!/usr/bin/node

const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('the function sendPaymentRequestToApi that uses the Utils.calculateNumber', () => {
    const spyConsole = sinon.spy(console);
    const stubUtils = sinon.stub(Utils);

    stubUtils.calculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyConsole.log.calledWith('The total is: 10')).to.be.true;

    stubUtils.calculateNumber.restore();
    spyConsole.log.restore();
  });
});

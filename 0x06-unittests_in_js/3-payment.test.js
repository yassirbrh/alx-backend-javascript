#!/usr/bin/node

const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('the function sendPaymentRequestToApi that uses the Utils.calculateNumber', () => {
    const spyPayments = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spyPayments.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    spyPayments.calculateNumber.restore();
  });
});

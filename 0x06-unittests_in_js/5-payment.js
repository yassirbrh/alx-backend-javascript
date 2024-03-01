#!/usr/bin/node

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalPayment = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalPayment}`);
}

module.exports = sendPaymentRequestToApi;

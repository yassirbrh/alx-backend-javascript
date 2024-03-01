#!/usr/bin/node
const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (request, resp) => {
  const { id } = request.params;
  resp.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, resp) => {
  resp.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (request, resp) => {
  let username = '';

  if (request.body) {
    username = request.body.userName;
  }

  resp.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

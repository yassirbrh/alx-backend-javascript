#!/usr/bin/node
const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

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

app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

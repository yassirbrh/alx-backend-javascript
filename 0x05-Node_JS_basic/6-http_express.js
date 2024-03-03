#!/usr/bin/node

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_, resp) => {
  resp.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

module.exports = app;

#!/usr/bin/node

const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((_, resp) => {
  const text = 'Hello Holberton School!';

  resp.setHeader('Content-Type', 'text/plain');
  resp.setHeader('Content-Length', text.length);
  resp.writeHead(200);
  resp.write(Buffer.from(text));
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;

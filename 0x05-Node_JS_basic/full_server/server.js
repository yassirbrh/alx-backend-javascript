#!/usr/bin/node

import express from 'express';
import linkRoutes from './routes';

const app = express();
const port = 1245;

linkRoutes(app);
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

export default app;
module.exports = app;

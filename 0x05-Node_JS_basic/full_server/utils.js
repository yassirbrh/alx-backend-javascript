#!/usr/bin/node

import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.split('\n').filter(Boolean);
        const dict = {};

        for (let i = 1; i < rows.length; i += 1) {
          const rowData = rows[i].split(',').filter(Boolean);
          if (rowData[3] in dict) {
            dict[rowData[3]].push(rowData[0]);
          } else {
            dict[rowData[3]] = [rowData[0]];
          }
        }
        resolve(dict);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;

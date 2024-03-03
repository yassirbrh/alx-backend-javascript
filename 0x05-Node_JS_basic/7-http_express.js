#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.split('\n').filter(Boolean);
        const dict = {};

        // Iterate over rows to populate the dictionary
        for (let i = 1; i < rows.length; i += 1) {
          const rowData = rows[i].split(',').filter(Boolean);
          if (rowData[3] in dict) {
            dict[rowData[3]].push(rowData[0]);
          } else {
            dict[rowData[3]] = [rowData[0]];
          }
        }

        // Construct the response string
        let response = 'This is the list of our students\n';
        response += `Number of students: ${rows.length - 1}\n`;

        for (const key in dict) {
          if (Object.prototype.hasOwnProperty.call(dict, key)) {
            response += `Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}\n`;
          }
        }

        resolve(response.trim());
      }
    });
  });
}

app.get('/', (_, resp) => {
  resp.send('Hello Holberton School!');
});

app.get('/students', async (req, resp) => {
  try {
    const data = await countStudents(process.argv[2]);
    resp.send(data);
  } catch (error) {
    resp.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

module.exports = app;

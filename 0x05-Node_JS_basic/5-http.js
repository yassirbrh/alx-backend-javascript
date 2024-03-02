#!/usr/bin/node

const http = require('http');
const fs = require('fs');

const host = 'localhost';
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

const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    const text = 'Hello Holberton School!';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(text);
  } else if (url === '/students') {
    try {
      const data = await countStudents(process.argv[2]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;

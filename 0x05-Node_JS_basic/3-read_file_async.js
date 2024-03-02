#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.split('\n').filter(Boolean);
        const studentsNumber = rows.length - 1;
        console.log(`Number of students: ${studentsNumber}`);
        const dict = {};

        for (let i = 1; i < rows.length; i += 1) {
          const rowData = rows[i].split(',').filter(Boolean);

          if (Object.hasOwnProperty.call(dict, rowData[3])) {
            dict[rowData[3]].length += 1;
            dict[rowData[3]].list.push(rowData[0]);
          } else {
            dict[rowData[3]] = { length: 1, list: [rowData[0]] };
          }
        }

        for (const key in dict) {
          if (Object.prototype.hasOwnProperty.call(dict, key)) {
            let result = `Number of students in ${key}: ${dict[key].length}.`;
            result += ' List: ';

            for (let i = 0; i < dict[key].list.length - 1; i += 1) {
              result += `${dict[key].list[i]}, `;
            }

            result += `${dict[key].list[dict[key].list.length - 1]}`;
            console.log(result);
          }
        }

        resolve(dict);
      }
    });
  });
}

module.exports = countStudents;

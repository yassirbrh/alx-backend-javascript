#!/usr/bin/node

const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(filePath, 'utf-8');
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
  let result = '';
  for (const key in dict) {
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      result += `Number of students in ${key}: ${dict[key].length}.`;
      result += ' List: ';

      for (let i = 0; i < dict[key].length - 1; i += 1) {
        result += `${dict[key].list[i]}, `;
      }

      result += `${dict[key].list[dict[key].length - 1]}\n`;
    }
  }
  console.log(result.trim());
}

module.exports = countStudents;

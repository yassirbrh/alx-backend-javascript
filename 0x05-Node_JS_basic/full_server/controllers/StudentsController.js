#!/usr/bin/node

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((data) => {
      const responseParts = ['This is the list of our students'];
      const sortedGroups = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));

      for (const [field, group] of sortedGroups) {
        responseParts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.join(', '), // Assuming group is an array of student names
        ].join(' '));
      }
      response.status(200).send(responseParts.join('\n'));
    }).catch((err) => {
      response.status(500).send(`This is the list of our students\n${err.message}`);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2]).then((data) => {
      let responseText = '';

      if (Object.keys(data).includes(major)) {
        const group = data[major];
        responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
      }
      response.status(200).send(responseText);
    }).catch((err) => {
      response.status(500).send(err.message);
    });
  }
}

export default StudentsController;
module.exports = StudentsController;

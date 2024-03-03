#!/usr/bin/node

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function linkRoutes(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default linkRoutes;
module.exports = linkRoutes;

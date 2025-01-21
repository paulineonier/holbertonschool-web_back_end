const countStudents = require('./3-read_file_async');

countStudents('database.csv')
  .then(() => console.log('Lecture terminée avec succès.'))
  .catch((err) => console.error(err.message));

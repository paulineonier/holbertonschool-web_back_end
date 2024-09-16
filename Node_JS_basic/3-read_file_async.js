// 3-read_file_async.js
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter(line => line.trim().length > 0);

      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }

      const students = lines.slice(1); // Skip the header
      console.log(`Number of students: ${students.length}`);

      const fields = {};

      students.forEach(student => {
        const [firstname, , , field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      // Log the number of students per field and the list of first names
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;

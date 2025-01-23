const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const header = lines.shift();
    console.log('Header détecté :', header);

    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (field) {
        const fieldTrimmed = field.trim();
        const firstNameTrimmed = firstName.trim();

        if (!students[fieldTrimmed]) {
          students[fieldTrimmed] = [];
        }
        students[fieldTrimmed].push(firstNameTrimmed);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    Object.entries(students).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

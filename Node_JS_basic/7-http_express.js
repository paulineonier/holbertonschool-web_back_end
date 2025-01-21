const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines.shift().split(','); // En-têtes du CSV
      const students = lines.map((line) => {
        const studentData = line.split(',');
        return Object.fromEntries(headers.map((header, index) => [header, studentData[index]]));
      });

      const fields = {};
      students.forEach((student) => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });

      const totalStudents = students.length;
      const report = [`Number of students: ${totalStudents}`];
      for (const [field, names] of Object.entries(fields)) {
        report.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(report.join('\n'));
    });
  });
}

// Route principale
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route pour les étudiants
app.get('/students', async (req, res) => {
  const databasePath = path.resolve(process.argv[2]); // Le fichier CSV passé en argument

  try {
    const studentData = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

// Démarrage du serveur sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;


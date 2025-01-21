const countStudents = require('./2-read_file');

// Test avec un fichier valide
console.log('Test avec un fichier valide :');
countStudents('database.csv');

// Test avec un fichier inexistant
console.log('Test avec un fichier inexistant :');
try {
  countStudents('nope.csv');
} catch (error) {
  console.error(error.message);
}


const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Supprimer la ligne d'en-tête
    const header = lines.shift(); // "firstname,lastname,age,field"
    console.log('Header détecté :', header); // Debugging optionnel

    const students = {};
    let totalStudents = 0;

    lines.forEach(line => {
      const parts = line.split(',');

      if (parts.length === 4) { // Vérifie qu'il y a bien 4 colonnes
        const field = parts[3].trim(); // Domaine d'étude
        const firstName = parts[0].trim(); // Prénom

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents += 1; // Compte l'étudiant
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

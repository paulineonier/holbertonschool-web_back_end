const fs = require('fs');

function countStudents(path) {
  try {
    // Lire le fichier de manière synchrone
    const data = fs.readFileSync(path, 'utf8');
    
    // Séparer les lignes du fichier
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Analyser les données dans un tableau d'objets
    const students = {};
    
    lines.forEach(line => {
      const [field, firstName] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName.trim());
    });
    
    // Calcul du nombre total d'étudiants
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);
    
    // Affichage du nombre d'étudiants par domaine et la liste des prénoms
    Object.entries(students).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
    
  } catch (err) {
    // Si une erreur se produit (fichier introuvable ou autre)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

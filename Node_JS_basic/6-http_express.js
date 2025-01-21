const express = require('express');

// Créer une instance d'Express
const app = express();

// Définir la route `/` pour répondre avec un texte
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Configurer le serveur pour écouter sur le port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Exporter l'application
module.exports = app;


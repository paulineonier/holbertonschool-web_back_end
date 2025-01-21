const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200; // Statut HTTP 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Réponse en texte brut
  res.end('Hello Holberton School!'); // Contenu de la réponse
});

// Le serveur écoute sur le port 1245
app.listen(1245);

module.exports = app;

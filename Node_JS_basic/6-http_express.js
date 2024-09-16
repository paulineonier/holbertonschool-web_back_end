// 6-http_express.js
const express = require('express');

// Initialize the app
const app = express();

// Define the route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app
module.exports = app;

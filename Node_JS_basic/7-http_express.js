// 7-http_express.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

// Function to count students (same logic as in 3-read_file_async.js)
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim().length > 0);

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1); // Skip the header
    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    const totalStudents = students.length;
    let output = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Initialize the Express app
const app = express();

// Define the route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the route for '/students'
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2]; // Get the database file path from the command-line arguments
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const studentData = await countStudents(databasePath); // Read the student data asynchronously
    res.end(studentData);
  } catch (error) {
    res.end(error.message);
  }
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app
module.exports = app;

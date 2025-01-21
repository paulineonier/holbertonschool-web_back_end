import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    try {
      const students = await readDatabase(databaseFile);
      let responseText = 'This is the list of our students\n';

      Object.keys(students)
        .sort()
        .forEach((field) => {
          const count = students[field].length;
          const list = students[field].join(', ');
          responseText += `Number of students in ${field}: ${count}. List: ${list}\n`;
        });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databaseFile);
      const list = students[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

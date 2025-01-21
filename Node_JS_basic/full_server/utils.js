import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const header = lines.shift().split(',');
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');

      const fields = {};

      for (const line of lines) {
        const values = line.split(',');
        const field = values[fieldIndex];
        const firstName = values[firstNameIndex];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      resolve(fields);
    });
  });
};

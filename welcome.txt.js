// file.js
const fs = require('fs');

// Créer le fichier
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');

  // Lire le fichier
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

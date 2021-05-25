const fs = require('fs');
const path = require('path');

module.exports = (folderName, description = 'objects') => {
  return new Promise((resolve, reject) => {
    const items = [];
    try {
      const files = fs.readdir(folderName, (err, files) => {
        let filesLeft = files.length;
        const seenIds = new Set();
        let duplicateCount = 0;
        for (const file of files) {
          const filename = path.join(folderName, file);
          fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            const parsedData = JSON.parse(data).results;

            parsedData.forEach(recipe => {
              if (!seenIds.has(recipe.id)) {
                items.push(recipe);
                seenIds.add(recipe.id);
              } else {
                duplicateCount += 1;
              }
            });
            filesLeft -= 1;
            if (filesLeft === 0) {
              console.log(`${items.length} unique ${description} loaded.`);
              console.log(`Ignored ${duplicateCount} duplicate ${description}.`);
              resolve(items);
            }
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  });
};

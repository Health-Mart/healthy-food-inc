const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '..', 'stored-data', 'groceries', 'goodeggs.json');

const loadGe = () =>
  new Promise((resolve) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const parsedData = JSON.parse(data);
      resolve(parsedData);
    });
  });

const groceryData = loadGe();

const matches = (key, val) => {
  if (val === '') {
    return () => true;
  }
  val = val.toLowerCase();
  return (item) => item[key].toLowerCase() === val;
};

const matchesTitle = (title) => {
  if (title === '') {
    return () => true;
  }
  title = title.toLowerCase();
  return (item) => item.title.toLowerCase().indexOf(title) !== -1;
};

const getGroceryItems = ({
  mainCategory = '',
  categoryName = '',
  subCategoryName = '',
  title = ''
}) => new Promise((resolve, reject) => {
    const startTime = new Date();
    groceryData.then(groceryItems => {
      const endTime = new Date();
      if (mainCategory !== '') {
        groceryItems = groceryItems.filter(matches('mainCategory', mainCategory));
      }
      if (categoryName !== '') {
        groceryItems = groceryItems.filter(matches('categoryName', categoryName));
      }
      if (subCategoryName !== '') {
        groceryItems = groceryItems.filter(matches('subCategoryName', subCategoryName));
      }
      if (title !== '') {
        groceryItems = groceryItems.filter(matchesTitle(title));
      }

      resolve(groceryItems);
    });
  });

module.exports = { getGroceryItems };
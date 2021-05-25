const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '..', 'stored-data', 'groceries', 'goodeggs.json')

const loadGe = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return
      }
      resolve(JSON.parse(data));
    })
  });
}

const groceryData = loadGe();

const matches = (key, val) => {
  if (val === '') {
    return () => true;
  } else {
    val = val.toLowerCase();
    return (item) => item[key].toLowerCase() === val;
  }
}

const matchesTitle = title => {
  if (title === '') {
    return () => true;
  } else {
    title = title.toLowerCase();
    return (item) => item.title.toLowerCase().indexOf(title) !== -1;
  }
}

const getGroceryItems = ({ maincategory = '', category = '', subcategory = '', title = '', count = 10, offset = 0 }) => {
  return new Promise((resolve, reject) => {
    groceryData.then(groceryItems => {
      const result = groceryItems
        .filter(matches('mainCategory', maincategory))
        .filter(matches('categoryName', category))
        .filter(matches('subCategoryName', subcategory))
        .filter(matchesTitle(title));
      resolve(result.slice(offset, offset + count));
    })
  });
};

getGroceryItems({ maincategory: 'pantry', title: 'tea', offset: 0, count: 50})
.then(console.log);

// groceryData.then(groceryItems => {
//   const res = groceryItems.filter(item => item.mainCategory === undefined);
//   console.log(res);
// });
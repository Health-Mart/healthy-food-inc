const path = require('path');
const fs = require('fs/promises');

const filename = path.join(__dirname, '..', 'stored-data', 'meals', 'meals.json');

const allMeals = fs.readFile(filename, { encoding: 'utf8' })
  .then(res => {
    return JSON.parse(res);
  });

getMeals = ({ categoryName, subCategoryName, title, count = 60, offset = 0 } = {}) => {
  return allMeals.then(meals => {
    if (categoryName) {
      categoryName = categoryName.toLowerCase();
      meals = meals.filter(meal => meal.categoryName.toLowerCase() === categoryName);
    }
    if (subCategoryName) {
      subCategoryName = subCategoryName.toLowerCase();
      meals = meals.filter(meal => meal.subCategoryName.toLowerCase() === subCategoryName);
    }
    if (title) {
      title = title.toLowerCase();
      meals = meals.filter(meal => meal.title.toLowerCase().indexOf(title) !== -1);
    }
    for (meal in meals) {
      delete meals[meal].productUrl;
    }
    return meals.slice(offset, offset + count);
  });
}

getMeals({ count: 5, subCategoryName: 'salads' })
  .then(res => console.log(res[0].details.productDetails));

module.exports = { getMeals };

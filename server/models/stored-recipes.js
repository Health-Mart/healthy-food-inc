const path = require('path');
const loadData = require('./loaddata.js');

const folderName = path.join(__dirname, '..', 'stored-data', 'recipes');

const storedRecipes = loadData(folderName, 'recipes');

const matchesRestrictions = restrictions => recipe => {
  for (restriction of restrictions) {
    if (!recipe.diets.includes(restriction)) {
      return false;
    }
  }
  return true;
}

const matchesTags = tags => recipe => {
  for (tag of tags) {
    if (!recipe[tag]) {
      return false;
    }
  }
  return true;
}

const matchesQuery = query => recipe => {
  return recipe.title.toLowerCase().indexOf(query.toLowerCase().trim()) !== -1;
}

const getRecipes = (query, restrictions, tags, count, offset) => {
  return new Promise((resolve, reject) => {
    storedRecipes.then(recipes => {
      let results = recipes.filter(matchesRestrictions(restrictions))
        .filter(matchesTags(tags))
        .filter(matchesQuery(query));
      resolve(results.slice(offset, offset + count));
    });
  });
};

module.exports = { getRecipes };

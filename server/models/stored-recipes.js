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

const recipeCountByDietAndTag = () => {
  const tagNames = ["vegetarian", "vegan", "glutenFree", "dairyFree", "veryHealthy", "cheap", "veryPopular", "sustainable"];
  storedRecipes.then(recipes => {
    const diets = {};
    const tags = {};
    for (const recipe of recipes) {
      for (const diet of recipe.diets) {
        diets[diet] = (diets[diet] ?? 0) + 1;
      }
      for (const tag of tagNames) {
        if (recipe[tag]) {
          tags[tag] = (tags[tag] ?? 0) + 1;
        }
      }
    }
    // const dietData = Object.entries(diets);
    // dietData.sort((a, b) => b[1] - a[1]);
    // console.log('DIETS');
    // dietData.forEach(i => console.log(`${i[0]}: ${i[1]}`));

    // const tagData = Object.entries(tags);
    // tagData.sort((a, b) => b[1] - a[1]);
    // console.log('TAGS');
    // tagData.forEach(i => console.log(`${i[0]}: ${i[1]}`));

  });
}

recipeCountByDietAndTag();
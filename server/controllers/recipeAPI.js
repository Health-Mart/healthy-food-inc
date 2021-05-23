const model = require('../../database/dummyData/dummyRecipesData.js');

exports.getRecipes = async (req, res) => {
  try {
    res.send(model.recipes.results);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getRecipe = async (req, res) => {
  try {
    let recipeObj = {};
    const recipeId = 658753;

    model.recipes.results.forEach((result) => {
      if (recipeId === result.id) {
        recipeObj = result;
      }
    });
    recipeObj.information = model.recipe;
    res.send(recipeObj);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

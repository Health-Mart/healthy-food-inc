const { getRecipes } = require('../models/stored-recipes')

exports.getRecipes = async (req, res) => {
  try {
    console.log(req.url);
    console.log('query: ', req.params.query);
    const query = req.query.query ?? '';
    const tags = req.query.tags ?? [];
    const restrictions = req.query.restrictions ?? [];
    const count = req.query.count ?? 24;
    const offset = req.query.offset ?? 0;

    console.log('params: ', query, tags, restrictions, count, offset);

    getRecipes(query, restrictions, tags, count, offset)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getRecipe = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
};

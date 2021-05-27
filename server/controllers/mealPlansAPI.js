const { getMeals } = require('../models/stored-meals.js');

exports.getMealPlan = async (req, res) => {
  try {
    console.log('here');
    console.log(req.url);
    console.log('query: ', req.params.query);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getMealPlans = async (req, res) => {
  console.log('GETMEALPLAN');
  try {
<<<<<<< HEAD
=======
    const key = JSON.stringify(req.query);
    console.log(getMeals);
    getMeals(key).then(meals => {
      console.log('inside getMeals.then');
      res.status(200).json(meals);
    });
>>>>>>> 4de727e2d70aa69f4fb8d7d770bd6676a3b43f40
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.putMealPlan = async (req, res) => {
  try {
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.putSubscription = async (req, res) => {
  try {
  } catch (err) {
    res.status(404).send(err.message);
  }
};

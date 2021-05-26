const getMeals = require('../models/stored-meals.js');

exports.getMealPlan = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
}

exports.getMealPlans = async (req, res) => {
  console.log('GETMEALPLAN');
  try {
    const key = JSON.stringify(req.query);
    console.log(key);
    getMeals(key).then(res => {
      res.status(200).json(key);
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
}

exports.putMealPlan = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
}

exports.putSubscription = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
}

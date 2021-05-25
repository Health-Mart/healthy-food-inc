const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const { getRecipes, getRecipe } = require('./controllers/recipeAPI.js');
const { putUserProfile, getUserProfile, putSubscription, postSignup, postLogin} = require('./controllers/userAPI.js');
const { getMealPlans, getMealPlan, putMealPlan } = require('./controllers/mealPlansAPI.js');
const { getGroceryItems, getGroceryItem} = require('./controllers/groceryAPI.js');
const { postAddToCart, getCart} = require('./controllers/cartAPI.js');

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

const apiPrefix = '/api';

app.get(apiPrefix + '/recipes', getRecipes);
// app.get(apiPrefix + '/recipe/id', getRecipe);
// // -> {name, description, keywords, instructions, image, ingredients: [{id, name, image?}]}

app.get(apiPrefix + '/grocery-items', getGroceryItems);
// // -> [{id, name, keywords, description, image}]
// app.get(apiPrefix + '/grocery-item/:id', getGroceryItem);
// // -> {id, name, keywords, description, image, price, availability}
// app.post(apiPrefix + '/add-to-cart', postAddToCart);
// app.get(apiPrefix + '/cart/', getCart);
// // -> {id, name, quantity}


// app.post(apiPrefix + '/login/', postLogin);
// // -> {result, userid, session}
// app.post(apiPrefix + '/signup/', postSignup);
// // -> {result, userid, session}
// app.put(apiPrefix + '/user/:userid/', putUserProfile);
// app.get(apiPrefix + '/user/:userid/profile', getUserProfile);
// // {username, contact-info, meal-preference, restrictions, exercise-level, household-size, height, weight, bmi, subscription-status, meal-history… }


// app.get(apiPrefix + '/mealplans', getMealPlans);
// // ->{id, title, description, price, meals-per-day, image?}
// app.get(apiPrefix + '/mealplan', getMealPlan);
// // -> { id } // user's current plan
// app.put(apiPrefix + '/mealplan/:planid', putMealPlan);
// // -> { result }
// app.put(apiPrefix + '/cancelsubscription', putSubscription);
// // -> { result }

app.get('*', (req, res) => {
  const pathName = path.join(__dirname, '..', 'client', 'dist', 'index.html');
  res.sendFile(pathName);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});

const { getRecipes } = require('./stored-recipes.js');

test('is an array', () =>
  getRecipes('', '', '', 2000, 0).then((recipes) => {
    expect(Array.isArray(recipes)).toBe(true);
  }));

test('is at least 1000 items long', () =>
  getRecipes('', '', '', 2000, 0).then((recipes) => {
    expect(recipes.length).toBeGreaterThan(1000);
  }));

test('the list has one specific item in it', () => {
  getRecipes('', '', '', 2000, 0).then((recipes) => {
    expect(recipes[0].vegetarian).toBeDefined();
  });
});

test('the list has one specific item in it', () =>
  getRecipes('beef', '', '', 1, 0).then((recipes) => {
    expect(recipes[0].title.toLowerCase().includes('beef')).toBe(true);
  }));

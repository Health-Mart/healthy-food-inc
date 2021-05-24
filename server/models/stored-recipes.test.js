const { storedRecipes } = require('./stored-recipes.js');

test('is an array', () => {
  return storedRecipes.then(recipes => {
    expect(Array.isArray(recipes)).toBe(true);
  });
});

test('is at least 1000 items long', () => {
  return storedRecipes.then(recipes => {
    expect(recipes.length).toBeGreaterThan(1000);
  });
});

test('the list has one specific item in it', () => {
  return storedRecipes.then(recipes => {
    expect(recipes[0].vegetarian).toBeDefined();
  });
});

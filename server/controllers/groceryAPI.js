// const { dataSource } = require('../settings.js');
const LRU = require('lru-cache');
const { getGroceryItems } = require('../models/stored-groceries.js');

const options = {
  max: 500,
  length(n, key) {
    return n * 2 + key.length;
  },
  dispose(key, n) {
    n.close();
  },
  maxAge: 1000 * 60 * 60
};
const cache = new LRU(options);

exports.getGroceryItems = async (req, res) => {
  try {
    const key = JSON.stringify(req.query);
    const cacheData = cache.get(key);
    if (cacheData) {
      res.status(200).json(cacheData);
    } else {
      const startTime = new Date();
      getGroceryItems(req.query)
        .then((groceryData) => {
          cache.set(key, groceryData);
          res.status(200).json(groceryData);
          const endTime = new Date();
          console.log('getGroceryItems run time:', endTime - startTime);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getGroceryItem = async (req, res) => {
  try {
  } catch (err) {
    res.status(404).send(err.message);
  }
};

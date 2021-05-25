const { dataSource } = require('../settings.js');
const { storedGroceryData } = require('../models/stored-groceries.js');

exports.getGroceryItems = async (req, res) => {
  // params: category, subcategory, title, producer
  // -> [{id, name, keywords, description, image}...]
  try {
    const title = req.query.title ?? '';
    const category = req.query.category ?? '';
    const subCategory = req.query.subcategory ?? '';
    const producer = req.query.producer ?? '';
    const count = req.query.count ?? 5;
    const offset = req.query.offset ?? 0;

    // if (dataSource === 'json')

    storedGroceryData.then(groceryData => {
      const result = groceryData
        .filter()


    });

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
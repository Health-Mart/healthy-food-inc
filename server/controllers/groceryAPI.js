// const { dataSource } = require('../settings.js');
const { getGroceryItems } = require('../models/stored-groceries.js');

exports.getGroceryItems = async (req, res) => {
  // params: category, subcategory, title, producer
  // -> [{id, name, keywords, description, image}...]
  try {
    // const mainCategory = req.query.maincategory ?? '';
    // const title = req.query.title ?? '';
    // const category = req.query.category ?? '';
    // const subCategory = req.query.subcategory ?? '';
    // const count = req.query.count ?? 100;
    // const offset = req.query.offset ?? 0;

    // if (dataSource === 'json')
    console.log(req.query);
    const startTime = new Date();
    getGroceryItems(req.query)
      .then((groceryData) => {
        res.status(200).json(groceryData);
        const endTime = new Date();
        console.log('getGroceryItems run time:', endTime - startTime);
      })
      .catch((err) => {
        console.error(err);
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
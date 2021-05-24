const { dataSource } = require('../settings.js');

exports.getGroceryItems = async (req, res) => {
  // -> [{id, name, keywords, description, image}...]
  try {
    // if (dataSource === 'json')
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
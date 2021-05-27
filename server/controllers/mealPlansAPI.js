exports.getMealPlans = async (req, res) => {
  try {
    console.log('here');
    console.log(req.url);
    console.log('query: ', req.params.query);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getMealPlan = async (req, res) => {
  try {
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

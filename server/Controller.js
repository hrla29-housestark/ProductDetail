const Helpers = require('../database/dbHelpers.js');

const getProductDetail = (req, res) => {
  let { id } = req.params;
  Helpers.getProductDetailHelper(id)
    .then((data) => {
      console.log(data)
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err));
};

module.exports = {
  getProductDetail
}
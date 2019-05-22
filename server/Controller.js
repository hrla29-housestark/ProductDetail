const Helpers = require('../database/dbHelpers.js');

const getProductDetail = (req, res) => {
  let { id } = req.params;
  Helpers.getProductDetailHelper(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err));
};

const getSimilarItems = (req, res) => {
  console.log(req.params)
  let {type} = req.params;
  Helpers.getSimilarItemsHelper(type)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err));
}

module.exports = {
  getProductDetail,
  getSimilarItems
}
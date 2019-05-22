const adidasModel = require('./index.js');

const getProductDetailHelper = (id) => {
  return adidasModel.find({productID: id});
}

const getSimilarItemsHelper = (target) => {
  return adidasModel.find({productType: target})
}

module.exports = {
  getProductDetailHelper,
  getSimilarItemsHelper
}
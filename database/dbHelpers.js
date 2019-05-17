const adidasModel = require('./index.js');

const getProductDetailHelper = (id) => {
  return adidasModel.find({productId: id});
}

module.exports = {
  getProductDetailHelper
}
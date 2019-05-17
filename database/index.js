const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fecadidas', {useNewUrlParser: true});

const adidasSchema = mongoose.Schema({
  productId: {type: Number},
  productName: {type: String},
  imageUrl: {type: Array},
  price: {type: Number},
  productType: {type: String},
  description: {type: String},
  descriptionSlogan: {type: String},
  specification: {type: Array}
});

const adidasModel = mongoose.model('adidasModel', adidasSchema);

module.exports = adidasModel;
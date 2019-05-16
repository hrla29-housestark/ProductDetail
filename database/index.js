const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fecadidas', {useNewUrlParser: true});

const adidasSchema = mongoose.schema({
  productId: {type: Number},
  productName: {type: String},
  imageUrl: {type: Array},
  price: {type: Number},
  detail: {type: String},
  specification: {type: Array}
});

const adidasModel = mongoose.model('adidasModel', adidasSchema);

module.exports = adidasModel;
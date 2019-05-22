const Router = require('express').Router();
const Controller = require('./Controller.js');

Router
.route('/productDetails/:id')
.get(Controller.getProductDetail)

Router
.route('/youMayAlsoLike/:type')
.get(Controller.getSimilarItems)

module.exports = Router;

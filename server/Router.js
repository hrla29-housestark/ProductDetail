const Router = require('express').Router();
const Controller = require('./Controller.js');

Router
.route('/productDetails/:id')
.get(Controller.getProductDetail)

module.exports = Router;

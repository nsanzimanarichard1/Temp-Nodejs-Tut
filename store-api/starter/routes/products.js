
 const express = require('express')
 const routers = express.Router()
 const {
    getallproducts,
    getallproductstatic
}=require('../controller/products')

 routers.route('/').get(getallproducts)
 routers.route('/static').get(getallproductstatic)

 module.exports = routers; 
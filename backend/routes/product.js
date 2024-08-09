// Built-in Module
const express=require('express');
// These two modules are directly exports without using module.exports because if we can define exports.function(){} then we can import by {} as like below.at the same time if we can export by using the module.exports=functionName() then we can use the require function and without using the {} to define the varible for that module.
const { getProducts, getSingleProducts } = require('../controllers/productController');

// Router is used for routing the requests,we can using the express router function to make the requests.
const router=express.Router();

// route(pathName).requstingMethod(get,post,put,delete)(functionName);The response was sent in the json format like res.json({});
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProducts);

module.exports=router;
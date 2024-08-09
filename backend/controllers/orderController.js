// we can use the exports object before the function to export to where the function is called.

const orderModel=require('../models/orderModel');
const productModel=require('../models/productModel');

// Create Order - /api/v1/order
exports.createOrder=async (req,res,next)=>{


   // If we can run the post api now it gives undefined value,because we cannot specify the data will be post in the json format so we can use the middleware method called express.json() in server.js. Then run the console.method to print the below line

   // console.log(req.body);

   const cartItems=req.body;
   // Please note In normal javascript we can use curly braces for closing the methods .but in react we can only use () instead of using {} otherwise it returns undefined value.Check it out

   // The amount value will be in the decimal format ,If we want only certain number of digits after the whole we can convert the amount data into Number format by using the Number() method then accessing the toFixed() value to reduce the decimal digits
   // But the JS will automatically known the type of data ,so you can directly use the toFixed() no problem
   const amount=Number(cartItems.reduce((acc,item)=>(acc+(item.product.price*item.qty)),0)).toFixed(2);
   // console.log(amount);
   const status='pending';


   // ****Important****//
   //If you define the same name in ordeModel and orderController then you can give the directly single name in create() method,
   // but if you define different names in both then you can use the below for example,
   // If the above cartItems was defined as cart_items then we can give Object.create(cartItems:cart_items) It is an format.Otherwise the two field names are same we can give single name is enough, it is an amazing feature of javascript.



   const order=await orderModel.create({cartItems,amount,status});    
// create() method takes some time to process so we can make the function as an asynchrous function and put the await keyword before the method.
   


// Updating product stock

cartItems.forEach(async(item)=>{
   const product=await productModel.findById(item.product._id);
   product.stock=product.stock-item.qty;
   await product.save();
})
res.json({
    success:true,
    message:"Order works!",
    order
   })
}
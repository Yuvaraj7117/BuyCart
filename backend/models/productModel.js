// mongoose is required for writing the schema.
// Schema is an structure of storing the data on the database.
// In mongoose.model() first parameter, only Single digit length variable name only give by us is important.
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
   name:String,
   price:String,
   description:String,
   ratings:String,
   images:{
    image:String
   },
   category:String,
   seller:String,
   stock:String,
   numOfReviews:String,
   createdAt:Date
})
// Before we can exporting the Schema we can convert the schema into model then we can exporting it to correspnding files.
const productModel=mongoose.model('Product',productSchema);
module.exports=productModel;
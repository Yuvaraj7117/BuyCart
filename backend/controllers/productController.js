// This product model was must be used in this file.
// The product Model contains the schema and it was stored in ProductModel variable.
// async and await was used for the asynchronous operations.
// Why we use aysnc and await because sometimes fetching the deatils take some more time maybe any network issues so we can precautionaly give the async and await
// exports keyword is used for exports the method to globally,so any where we can import and use.
// ProductModel contains the schema so, we can find the needed data by using the find() method.
// If we can not specify any one data on () of find() method it will retrive all the products.
// We can give the products in the res.json() phase. so we can get the products details when we can get response.
// req.params.id is the id after the / 
const ProductModel=require('../models/productModel');


// Get products API - api/v1/products
exports.getProducts=async (req,res,next)=>{

   // If we can use the keyword in our api or url then only this below code executed other wise it returns all the products so we can mention in the empty object in the else part
   // $regex will responsible for searching the keyword 
   // $options :i -> means it does not care about case sensitive.if we did'nt  give the options in the section it will act as different for uppercase and lowercase,so if we can avoid the case problem we must give $options:'i'

   let query=req.query.keyword?{
      name:{
         $regex:req.query.keyword,
         $options:'i'
      }
   }:{}//{} means empty object
   // console.log(query);

  const products=await ProductModel.find(query);    //Get all the products
   res.json({
      success:true,
      // message:'Get Products working!',
      products
   })
}
// Get products API - api/v1/products/:id
exports.getSingleProducts=async(req,res,next)=>{
   // console.log(req.params.id);
   try {
      const product=await ProductModel.findById(req.params.id);   //Get the single product
    res.status(200).json({
       success:true,
      //  message:'Get Single Product working!',
       product
    })
      
   } catch (error) {
     res.status(404).json({
      success:false,
      message:error.message
     })
   }
   
 }
//  Please using the status code for the response ,it is must.because it leads to clean clear code and neatness.
/**

  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Moved Temporarily',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '307': 'Temporary Redirect',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Time-out',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Request Entity Too Large',
  '414': 'Request-URI Too Large',
  '415': 'Unsupported Media Type',
  '416': 'Requested Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': 'I\'m a teapot',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Unordered Collection',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Time-out',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required'
 */

// Express Js is an framework of NodeJS.
// It simplifies the work of creating the server.
// We can run our project in different systems with differnt ports,so we can using the dotenv file to solve the static fixing port problem.config file was connected.
// path module is used for giving the path to the server.
// After we can initializing the server
// then we can using the config method to accessing the config folder and config.env file.
// also the join method is comprising the directory name config and the file name config.env
// Then we can making our server for listening to give the response by using the listen() method.
// products,orders are used for the url purposes
// In our page url these api/v1 was set to an prefix

const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors');
const app=express();
const connectDatabase=require('./config/connectDatabase');
const products=require('./routes/product');
const orders=require('./routes/order');
dotenv.config({path:path.join(__dirname,'config','config.env')});

// Calling this method to connecting the database
connectDatabase();


app.use(express.json());//It is used to specify the json data will posted through API
app.use(cors());//It is used for backend and frontend cross works.It is an middleware module
app.use('/api/v1/',products);//get api
app.use('/api/v1/',orders);//post api


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

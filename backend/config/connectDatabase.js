// mongoose is used for the database operations.
// process is an built in method for accessing the config details.so we can use process.env.VariableName;
// if we can use the then() method we can get the parameter in the () we can get the details of the host details, by con variable.the con have many methods we can accessing the connection value.then accessing the host method.
//In JavaScript (including when used in React), the `exports` object is used in Node.js to export functions, objects, or primitive values from a module so that they can be imported and used in another module. This is a CommonJS module system, which is different from the ES6 module system.
// When you use exports.method = function() {} in Node.js, you are defining a method on the exports object. This is equivalent to defining a named export in the ES6 module system.

/* Modules */

// Modules - Split the code into multiple files / reuse
// There are three types of modules are available such as built-in Modules,Local Modules and Third Party Modules.
// Built-in Modules: http module,crypto module ,fs module are the example of built in modules in NodeJS
// Local Modules   : If we create the function and exports by using the module.exports=function name then we can use the function in anywhere we can import the function by using the require() function.
// Third Party Modules are imported from other sites.

// Arrow function is an ES6 feature.

const mongoose=require('mongoose');

const connectDatabase = () =>{
   mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log("MongoDB connected to Host:"+con.connection.host);
   })
   .catch(()=>{
    console.log("MongoDB is not connected to Host");
   })
};

module.exports=connectDatabase;
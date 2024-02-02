const express = require('express');
const app=express();
const port = process.env.PORT||9000;
const bodyParser = require('body-parser');
const moment = require('moment');
app.locals.moment = moment;
 require("./models/db")
  require("dotenv").config();
 let userpass  =process.env.MONGODB_PASSWORD;


// Setting the Static path NG 
app.use(express.static('public'))


// Set the Template handlers 

app.set('view engine','ejs')


// Set the  Middleware 
app.use(bodyParser.urlencoded({ extended: true }));


// Set the Roue path 
app.use('/',require('./routes/news'))

// View directory path assign 
app.set('views','./views')


// port Listen 

app.listen(port,()=>  
console.log(`The server running on the ${port}`)
)
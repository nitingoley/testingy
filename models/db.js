let mongoose = require("mongoose");
require('dotenv').config();
mongoose.set("strictQuery" , false);


let userpass  =process.env.MONGODB_PASSWORD;


mongoose.connect(`mongodb+srv://nitingoley1:${userpass}@cluster0.y2wcksp.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("Db connect with cloud");
}).catch(()=>{
     console.log("DB not connect with cloud ");
})

 



const Schemas = new mongoose.Schema({
    name :
     {
        type : String,
        required : true
     },
     gmail : 
     {
        type: String,
         unique : true
     },
     password :
     {
        type: String 
     }
})


const ModelSchema = new mongoose.model('IndiaNews' , Schemas);

module.exports = ModelSchema;
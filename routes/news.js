const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')
let model = require("../models/db")


// Here the Moment im use for currenttime zone or Local date world wide use 

// mathematical functionality in Node.js, you might consider using built-in JavaScript Math object, which provides many mathematical functions such as trigonometric functions (Math.sin(), Math.cos()), logarithmic functions (Math.log()), and constants like Math.PI.



newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
           'country=us&' +
          'apiKey=2c6bfa81c2e8403da6eff5d85b8d1432';

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
        
        
        
    
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    // co y.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=2c6bfa81c2e8403da6eff5d85b8d1432`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
        
        

        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})



    // Signup Data Storing  in Db 


    
newsr.post('/signup',async(req,res)=>{
    let{name , gmail , password} = req.body;
    try
    {
      
        const Data = new model({name , gmail , password});
        let UserInfo = await Data.save();
        console.log(UserInfo);
        //  res.send('Sucessful Signup')
         res.redirect("/")
    }
     catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})





// Login User 

newsr.post('/login' , async(req , res)=>{
     
    let {gmail , password} = req.body;
    try {

        let Data = await model.findOne({gmail , password})
        if(!Data) 
        {
            res.send("Invaild username or password");
        }
         
        res.redirect('/');
        console.log(Data);
    } catch (error) {
        
    }

})








// render the Signup page \

newsr.get('/signup'  ,  (req , res)=>{
    res.render("signup")
})


newsr.get('/login'  ,  (req , res)=>{
    res.render("login")
})

module.exports=newsr
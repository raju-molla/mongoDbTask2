const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser= require('body-parser')
const schoolRoute= require('./route/school');
const mongoose= require('mongoose')
app.use(bodyParser.json());
app.use(schoolRoute);










// home route
app.get('/', (req,res)=>{
    res.json({
        mgs: 'This is home page'
    })
})

// if couldn't find any route
app.get('*',(req,res)=>{
    res.json({
        mgs: "Opps! sorry your route is wrong"
    })
})


// database 
mongoose.connect('mongodb://localhost:27017/school').then(()=> console.log('Database connected'))
.catch((err)=> console.log(err))

//server
const port = process.env.PORT; 
app.listen(port, ()=> console.log(`Server is running at port ${port}`))
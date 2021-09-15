const express= require('express');
const route= express.Router();
const {getAll,register,login}= require('../controller/school');

route.get('/all-school',getAll),
route.post('/school/register',register);
route.post('/school/login',login);


module.exports=route;
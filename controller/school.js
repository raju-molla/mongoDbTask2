const School= require('../models/school');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const secretkey='adsgfasgsagsadf';

const getAll=async(req,res)=>{
    const data= await School.find();
    if(data.length){
        return res.send(data);
    }
    else{
         return res.send("Here is empty data");
    }
}

const register = async (req, res)=> {
    const { password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    const school = new School(req.body);
    const data = await school.save();

    return res.status(201).send({
        msg: "student added successfully",
        data
    });
}


const login=async(req,res)=>{
    const {email,password}=req.body;
    let isEmail= await School.findOne({email});
    if(isEmail){
        const isValid= await bcrypt.compare(password,isEmail.password);
        if(isValid){
            const data={
                email:isEmail.email,
                role:isEmail.role
            }
            const token= await jwt.sign(data,secretkey);
            res.json({
                data,
                token
            })

        }
        else{
            
            res.json({
                mgs:'password is not match!'
            })
        }

    }
    else{
        res.json({
            mgs: "Email is not find"
        })
    }

}



module.exports={
    getAll,
    register,
    login
}
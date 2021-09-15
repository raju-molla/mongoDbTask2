const mongoose = require('mongoose');
const {Schema} = mongoose;

const schoolSchema= new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    bloodGroup: String,
    id: String,
    email:{
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    role: String,
    password:String,
    isDelete:{
        type: Boolean,
        default: false
    }
})

module.exports= mongoose.model('school',schoolSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,'Please add name']
    },
    email:{
        type:String,
        require:[true,'Please add email'],
        unique:true,
    },
    password:{
        type:String,
        require:[true,'Please add password']
    }
})
module.exports = mongoose.model('User',userSchema);

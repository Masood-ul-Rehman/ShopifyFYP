const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please enter password']
    },

},{
    timestamps:true
})
module.exports=mongoose.model('user',userSchema)
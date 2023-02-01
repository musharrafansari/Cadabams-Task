const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    education:{
        type:String,
        require:true
    },
    occupation:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    // address:{
    //     type:String,
    //     require:true
    // },
    
},{timestamps:true})

module.exports=mongoose.model("Aser",userSchema)
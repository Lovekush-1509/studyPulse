const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        required:true,
    },
    additionalInfo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        },
    ],
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"
        },
    ],

    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },

    contactNo:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true,
    }
    
});


module.exports = mongoose.model("User",userSchema);
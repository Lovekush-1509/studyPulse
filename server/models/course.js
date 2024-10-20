const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  tags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tag"
        },
    ],

    category:{
        type:[String],
        required:true,
    },

    whatYouwillLearn:{
        type:String,
        required:true,
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section",
        },
    ],

    Instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReviews"
        },
    ],

    price:{
        type:Number,
        required:true,
    },

    thumbnail:{
        type:String,
        required:true,
    },

    courseName:{
        type:String,
        required:true,
    },

    courseDescription:{
        type:String,
        required:true,
    },
    
    studentEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    
});


module.exports = mongoose.model("Course",courseSchema);
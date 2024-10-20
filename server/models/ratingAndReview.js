const mongoose = require("mongoose");

const ratingAndReviews = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    ratings:{
        type:Number,
        required:true,
    },

    review:{
        type:String,
        required:true,
    },

    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true,
        index:true,
    }
    
    
});


module.exports = mongoose.model("RatingAndReviews",ratingAndReviews);
const mongoose = require("mongoose");

const courseProgress = mongoose.Schema({
    courseId:{
        type:String,
        required:true
    },

    completeVideo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection"
        }
    ]
    
});


module.exports = mongoose.model("CourseProgress",courseProgress);
const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
    
   courseName:{
     type:String,
   },
   courseDescription:{
     type:String,
   },
   course:[
   {
     type:mongoose.Schema.Types.ObjectId,
     ref:"Course",
   },
],
    
});


module.exports = mongoose.model("Tag",tagSchema);
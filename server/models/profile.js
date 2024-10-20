const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    
    DOB:{
        type:String,
    },
    Gender:{
        type:String,
    },
    ContactNo:{
        type:String,
    },
    About:{
        type:String,
    }

    
});


module.exports = mongoose.model("Profile",profileSchema);
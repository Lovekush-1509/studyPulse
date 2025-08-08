const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = (req,res) =>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        });
        console.log("cloudinary connected successfully");
    }catch(e){
        console.log("cloudinary not connected",e.message);
    }
}
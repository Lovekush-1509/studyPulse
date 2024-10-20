const cloudinary = require("cloudinary").v2;

exports.uploadToCloudinary = async(file,folder,quality,height,width) =>{
    try{
        let option = {folder}
        if(quality){
            option.quality = quality;
        }
        if(height){
            option.height = height;
        }
        if(width){
            option.width = width;
        }
        option.resource_type = "auto";
        return cloudinary.uploader.upload(file.tempFilePath,option);
    }catch(e){
        console.log("cloudinary upload error",e.message);
    }
}
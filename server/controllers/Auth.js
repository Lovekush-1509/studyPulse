const OTP = require("../models/OTP")
const User = require("../models/user");
const Profile = require("../models/profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// sendOtP
exports.sendOTP = async(req,res) =>{
    try{
            const {email} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.json({
                success:false,
                message:"user already registered",
            });
        }

        let otp = otpGenerator.generate(6,{
            lowerCaseAlphabets:false,
            upperCaseAlphabets:false,
            specialChars:false,
        });

        let uniqueOTP = await OTP.findOne({otp:otp});
        while(uniqueOTP){
            otp = otpGenerator.generate(6,{
                lowerCaseAlphabets:false,
                upperCaseAlphabets:false,
                specialChars:false,
            });
            uniqueOTP = await OTP.findOne({otp,email});
        }
            const tempOTP = new OTP({otp:otp,email});
        const OTPVal = await tempOTP.save();
        return res.json({
            success:true,
            message:"OTP sent successfully",
            OTPVal,
        })
    }catch(e){
        return res.json({
            succes:false,
            message:"error occured during OTP send",
            error:e.message,
        })
    }
    
}


// signUP
exports.signUp = async(req,res) =>{
    try{
        const {
            lastName,
            firstName,
            contactNo="",
            accountType,
            password,
            confirmPassword,
            email,
            otp,
        } = req.body;

        console.log(req.body);

        if(!lastName || !firstName || !password || !confirmPassword || !email || !otp){
            return res.json({
                success:false,
                message:"All field are required......",
            });
        }

        if(password !== confirmPassword){
            return res.json({
                success:false,
                message:"password and confirm password should be same",
            });
        }

        const isuserExist = await User.findOne({email:email});
        console.log(isuserExist);
        if(isuserExist){
            return res.json({
                success:false,
                message:"user already registered",
            });
        }

        const recentOTP = await OTP.findOne({email}).sort({createdAt:-1}).limit(1);
        if(recentOTP.length == 0){
            return res.json({
                success:false,
                message:"try again later",
            });
        }else if(otp !== recentOTP.otp){
            return res.json({
                success:false,
                message:"OTP didn't match",
            });
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        const profileInfo = new Profile({
            DOB:null,
            Gender:null,
            Age:null,
            contactNo:null,
        });
        
        const profileId = await profileInfo.save();
        
        console.log("creating user")
        const user = await User.create({
            lastName,
            firstName,
            contactNo,
            accountType,
            password:hashedPassword,
            email,
            additionalInfo:profileInfo,
            profileInfo:profileId._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });
        console.log("creating user successfully")
        

        return res.json({
            success:true,
            message:"sign up successfully",
            data:user,
        });

    }catch(e){
        return res.json({
            success:false,
            error:e.message,
            message:"Error occured during sign up",
        });
    }
}

// LogIn

exports.LogIn = async(req,res) =>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.json({
                success:false,
                message:"All fields are required",
            });
        }


        const userExist = await User.findOne({email}).populate("additionalInfo");
        if(!userExist){
            return res.json({
                success:false,
                message:"User not found",
            });
        }

        // console.log("account Type:",userExist.accountType);
        if(await bcrypt.compare(password,userExist.password)){
            const payload = {
                email:userExist.email,
                id:userExist._id,
                accountType:userExist.accountType,
            }

            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });

            userExist.token = token;
            userExist.password = undefined;

            const options = {
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            console.log("user data",userExist);
            return res.cookie("token",token,options).json({
                success:true,
                message:"Logged In successfully",
                user:userExist
            });
        }else{
            return res.json({
                success:false,
                message:"Password is incorrect",
            });
        }



    }catch(e){
        return res.json({
            success:false,
            message:"Error occured during Log in",
            error:e.message,
        });
    }
}

// incomplete---------------------------------------------
exports.changePassword = async(req,res) =>{
    try{
        const id = req.user.id;
        const {currentPassword,newPassword} = req.body;
        console.log("inside change passwrd:",req.body)
        if(!currentPassword || !newPassword){
            return res.json({
                success:false,
                message:"All fields are required",
            });
        }

        if(currentPassword === newPassword){
            return res.json({
                success:false,
                message:"New password should not be same as current password",
            });
        }

        const user = await User.findById(id);
        console.log(user);
        if(!await bcrypt.compare(currentPassword,user.password)){
            return res.json({
                success:false,
                message:"Your Old password didn't match",
            });
        }

        

        const hashedPassword = await bcrypt.hash(newPassword,10);
        const updatedUser = await User.findByIdAndUpdate({_id:id},
                                                        {password:hashedPassword},
                                                        {new:true},
        );

        if(!updatedUser){
            return res.json({
                success:false,
                message:"User Not found",
            });
        }

        return res.json({
            success:true,
            message:"Password updated successfully",
        });
    }catch(e){
        return res.json({
            success:false,
            message:"Password not updated",
            error:e.message,
        });
    }

}
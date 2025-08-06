const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const courseRoute = require("./routes/course");
const profileRoute = require("./routes/profile");
const paymentRoute = require("./routes/payment");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const {dbConnect} = require("./config/database");
const {cloudinaryConnect} = require("./config/cloudinary");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

dbConnect();
cloudinaryConnect();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));
app.use(fileUpload({
    useTempFiles:true,
    useFileDir:"/tmp"
}));

app.use("/studynotion/version-1.0/auth",userRoute);
app.use("/studynotion/version-1.0/course",courseRoute);
app.use("/studynotion/version-1.0/profile",profileRoute);
app.use("/studynotion/version-1.0/payment",paymentRoute);

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:`Your server started on ${PORT}`,
    });
});

app.listen(PORT,()=>{
    console.log(`Your server started on ${PORT}`);
});

// http://localhost:4000/studynotion/version-1.0/userRoute/signup
// http://localhost:4000/studynotion/version-1.0/userRoute/sendotp
// http://localhost:4000/studynotion/version-1.0/userRoute/LogIn
// http://localhost:4000/studynotion/version-1.0/userRoute/reset-password-token
// http://localhost:4000/studynotion/version-1.0/userRoute/reset-password
// http://localhost:4000/studynotion/version-1.0/userRoute/change-password



// http://localhost:4000/studynotion/version-1.0/profileRoute/get-user-details
// http://localhost:4000/studynotion/version-1.0/profileRoute/get-enrolled-course
// http://localhost:4000/studynotion/version-1.0/profileRoute/delete-profile
// http://localhost:4000/studynotion/version-1.0/profileRoute/update-profile
// http://localhost:4000/studynotion/version-1.0/profileRoute/update-profile-pic





// http://localhost:4000/studynotion/version-1.0/paymentRoute/verify-signature
// http://localhost:4000/studynotion/version-1.0/paymentRoute/capture-payment






// http://localhost:4000/studynotion/version-1.0/courseRoute/upload-course
// http://localhost:4000/studynotion/version-1.0/courseRoute/create-section
// http://localhost:4000/studynotion/version-1.0/courseRoute/update-section
// http://localhost:4000/studynotion/version-1.0/courseRoute/create-sub-section
// http://localhost:4000/studynotion/version-1.0/courseRoute/delete-section
// http://localhost:4000/studynotion/version-1.0/courseRoute/update-sub-section
// http://localhost:4000/studynotion/version-1.0/courseRoute/delete-sub-section

// http://localhost:4000/studynotion/version-1.0/courseRoute/get-all-courses
// http://localhost:4000/studynotion/version-1.0/courseRoute/get-course-details

// http://localhost:4000/studynotion/version-1.0/courseRoute/create-category
// http://localhost:4000/studynotion/version-1.0/courseRoute/get-category
// http://localhost:4000/studynotion/version-1.0/courseRoute/get-category-course
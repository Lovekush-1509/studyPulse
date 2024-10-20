const express = require("express");
const router = express.Router();

const {
    signUp,
    LogIn,
    sendOTP,
    changePassword
} = require("../controllers/Auth");

const {auth} = require("../middleware/auth");
const {resetPassword,resetPasswordToken} = require("../controllers/resetPassword");

router.post("/signup",signUp);
router.post("/login",LogIn);
router.post("/sendotp",sendOTP);
router.put("/change-password",auth,changePassword);


router.post("/reset-password",resetPassword);
router.post("/reset-password-token",resetPasswordToken);

module.exports = router;
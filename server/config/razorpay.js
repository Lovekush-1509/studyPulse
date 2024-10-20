const razorpay = require("razorpay");


require('dotenv').config();

exports.instances = new razorpay({
    key_id : process.env.RAZORPAY_ID,
    secret_id:process.env.RAZORPAY_SECRET,
});
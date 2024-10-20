const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailSender = async(email,body,heading) =>{
   try{
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        auth:{
            user:process.env.USER_MAIL,
            pass:process.env.PASS,
        },
    });

    const response = await transporter.sendMail({
        from:"StudyNotion by-Lovekush",
        to:`${email}`,
        subject:`${heading}`,
        html:`${body}`
    })
    return response;
   }catch(e){
     console.log(e.message);
   }
}
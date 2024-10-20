import React, { useState } from "react"
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from "react-router-dom";
import { CgStopwatch } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { sendOtp, signUp } from "../services/auth";



const VerifyMail = ({formData}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newOTP,setOtp] = useState("");

   const onSubmit = (event) =>{
     formData.otp = newOTP;
     console.log("this is the formData:",formData)
     dispatch(signUp(formData.accountType,formData.firstName,formData.lastName,formData.email,formData.password,formData.confirmPassword,formData.otp,formData.contactNo,navigate));
   }

  return (
    <div className="h-[80vh] flex  justify-center items-center">

      <div className="flex flex-col gap-3 h-fit lg:w-[300px]">
            <p className="text-richblack-5 text-3xl">Verify Email</p>
            <p className="text-pure-greys-100 text-md"> A verification has sent to you. Enter the code below</p>
            <OtpInput
                name="OTP"
                value={newOTP}
                onChange={setOtp}
                inputStyle={{
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '5px',
                  textAlign: 'center', 
                  backgroundColor:'#161D29'
                }}
                numInputs={6}
                renderSeparator={<span className="mr-[10px]"></span>}
                renderInput={(props) => <input {...props} className="focus:border-[1px] border-yellow-50 outline-none text-richblack-5" />}
            />
            <button
               className="bg-yellow-50 text-black w-full py-[5px] rounded-md"
               onClick={onSubmit}
            >Verify and Register</button>
            <div className="flex justify-between text-sm">
                <Link to='/login' className="flex items-center">
                    <IoIosArrowRoundBack/>
                    <span>Back to login</span>
                </Link>
                <div className="flex items-center cursor-pointer text-blue-100"
                    onClick={() => sendOtp(formData.email,navigate)}
                >
                    <CgStopwatch/>
                    <span>Resend OTP</span>
                </div>
            </div>
      </div>

    </div>
  )
};

export default VerifyMail;

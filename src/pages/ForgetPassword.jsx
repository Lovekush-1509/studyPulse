import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPasswordResetToken } from "../services/auth";

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const [emailSend,setEmailSend] = useState(false);
    const [email,setEmail] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSend));
    }

  return (
    <div className="h-[90vh] flex justify-center items-center">
        <div className="lg:w-[450px]">
            <h1>
                {
                    emailSend?"Check Email":"Reset your password"
                }
            </h1>
            <p>
                {
                    emailSend?`We have sent the reset email to ${email}`:"Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                }
            </p>
                
            {!emailSend && 
                <form onSubmit={submitHandler}>
                    <div>Email address <sup className="text-pink-200">*</sup></div>
                    <input
                        className="bg-richblack-700"
                        onChange={(e)=>(setEmail(e.target.value))}
                        value={email}
                        placeholder="Enter your email"
                    />

                    <button>Reset Password</button>

                </form>
            }

            {
                emailSend && <button>Resend mail</button>
            }

            <Link to="/login">Back to login</Link>

        </div>
    </div>
  )
};

export default ForgetPassword;

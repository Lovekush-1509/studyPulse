import React from "react"
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/auth";

const SignUp = ({formData,setFormData}) => {

    const [isCreate,setIsCreate] = useState(false);
    const [isConfirm,setIsConfirm] = useState(false);
    const [isStudent,setIsStudent] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    

    const formHandler =(event)=>{
        const {name,value} = event.target;
        setFormData((prevData) =>({...prevData,[name]:value}));
      }

      const submitHandler = (event) =>{
        event.preventDefault();
        formData.accountType = isStudent?"Student":"Instructor";
        console.log(formData);
        if(formData.password !== formData.confirmPassword){
            alert("Confirm password and Password should be same");
            return;
        }
        dispatch(sendOtp(formData.email,navigate));
        //dispatch(signUp(formData.accountType,formData.firstName,formData.lastName,formData.email,formData.createPassword,formData.confirmPassword,formData.otp,navigate));
      }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 text-richblack-5"
      >

        <div className="flex justify-around items-center gap-3 bg-richblack-700 rounded-full w-[200px] h-[40px] ">
            <div className={`${isStudent?"bg-richblack-800":"bg-richblack-700"} cursor-pointer px-5 py-2 rounded-full transition-all delay-400`}
                onClick={() => setIsStudent(true)}
            >
                Student
            </div>
            <div className={`${!isStudent?"bg-richblack-800":"bg-richblack-700"} cursor-pointer px-5 py-2 rounded-full transition-all delay-400`}
                onClick={() =>setIsStudent(false)}
            >
                Instructor
            </div>

        </div>

        <div className="flex lg:flex-row flex-col gap-5">
            <div>
                <div>First Name<sup className="text-pink-300">*</sup></div>
                <input
                    className="w-[140px] h-[30px] rounded text-richblack-5 text-sm bg-richblack-700"
                    onChange={formHandler}
                    name="firstName"
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                />
            </div>
            <div>
                <div>Last Name<sup className="text-pink-300">*</sup></div>
                <input
                    className="w-[140px] h-[30px] rounded text-richblack-5 text-sm bg-richblack-700"
                    onChange={formHandler}
                    name="lastName"
                    placeholder="Enter your Last Name"
                    value={formData.lastName}
                />
            </div>
        </div>

        <div>
            <div>Email<sup className="text-pink-300">*</sup></div>
            <input 
                className="w-[300px] h-[30px] rounded text-richblack-5 text-sm bg-richblack-700"
                onChange={formHandler}
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
            />
        </div>

        <div >
            <div>Phone Number<sup className="text-pink-300">*</sup></div>
            <input
                className="w-[300px] h-[30px] rounded text-richblack-5 text-sm bg-richblack-700"
                onChange={formHandler}
                name="contactNo"
                value={formData.contactNo}
                placeholder="Enter your Phone Number"
            />
        </div>

        <div className="flex lg:flex-row flex-col gap-5">
            <div>
                <div>Create Password<sup className="relative text-pink-300">*</sup></div>
                <input
                    className="w-[140px] h-[30px] rounded text-richblack-5 text-sm bg-richblack-700"
                    onChange={formHandler}
                    name="password"
                    value={formData.password}
                    placeholder="Create password"
                    type={`${isCreate?"text":"password"}`}
                />
                <div
                    className="absolute text-pure-greys-500 translate-x-[120px] translate-y-[-20px] cursor-pointer"
                    onClick={() =>(setIsCreate(!isCreate))}>
                        {
                            !isCreate?<LuEye/>:<FaRegEyeSlash/>
                        }
                </div>
            </div>
            <div>
                <div>Confirm Password<sup className="relative text-pink-300">*</sup></div>
                <input
                    className="w-[140px] h-[30px] rounded text-richblack-5 text-sm bg-richblack-700"
                    onChange={formHandler}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="confirm password"
                    type={`${isConfirm?"text":"password"}`}
                />
                <div
                    className="absolute text-pure-greys-500 translate-x-[120px] translate-y-[-20px] cursor-pointer "
                    onClick={() =>(setIsConfirm(!isConfirm))}>
                        {
                            !isConfirm?<LuEye/>:<FaRegEyeSlash/>
                        }
                </div>
            </div>
        </div>


            <button className="text-black bg-yellow-50 w-fit px-[100px] py-[8px] rounded hover:scale-95">Create Account</button>
      </form>
    </div>
  )
};

export default SignUp;

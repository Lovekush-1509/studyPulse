import React, { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../services/auth";


const LogIn = () => {

  const [isVis,setIsVis] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const formHandler =(event)=>{
    const {name,value} = event.target;
    setFormData((prevData) =>({...prevData,[name]:value}));
  }
  
  const userLogin = (event) =>{
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData.email,formData.password,Navigate));
  }

  return (
    <div className="text-richblack-5">
      <form onSubmit={userLogin} className="flex flex-col gap-8">
          <div>
          <label>
            <div>Email Address</div>
            <input 
              name="email"
              value={formData.email}
              className="w-[300px] h-[30px] px-1 py-2 rounded text-richblack-5 text-sm bg-richblack-700" 
              placeholder="Enter your email"
              type="text"
              onChange={formHandler}
              />
          </label>
          </div>
        <div className="relative">
        <label>
          <div>Password</div>
          <input 
            name="password"
            value={formData.password}
            className="w-[300px] h-[30px] px-1 py-2 rounded text-richblack-5 text-sm bg-richblack-700" 
            onChange={formHandler}
            type={`${isVis?"text":"password"}`} placeholder="Enter your password"/>
           <div
              className="absolute text-pure-greys-500 translate-x-[280px] translate-y-[-20px] cursor-pointer"
              onClick={() =>(setIsVis(!isVis))}>
            {
              !isVis?<LuEye/>:<FaRegEyeSlash/>
            }
           </div>
           <div className="absolute translate-x-[220px] text-[11px] text-blue-100 hover:underline">
            <Link to="/forget-password">Forget Password?</Link>
           </div>
        </label>
        </div>
        
        <button className="bg-yellow-50 text-black text-center px-[129px] py-[8px] rounded w-fit hover:scale-95">Sign in</button>
      </form>
    </div>
  )
};

export default LogIn;
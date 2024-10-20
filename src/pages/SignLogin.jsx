import React from "react"
import HighlightedText from '../components/homePage/HighlightedText'
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import image from '../assets/Images/login.webp';
import frame from '../assets/Images/frame.png';

const SignLogin = ({type,formData,setFormData}) => {
  return (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="flex lg:items-center lg:flex-row flex-col gap-[100px]">

        <div className="flex flex-col gap-[5px]">
            <p className="text-3xl mb-[10px]">Welcome Back</p>
            <p className="text-pure-greys-200 text-lg">Discover your passion</p>
            <HighlightedText text={"Be Unstopable"}/>
            {
                type === "login"?<LogIn/>:<SignUp setFormData={setFormData} formData={formData}/>
            }
        </div>

        <div className="relative">
            <div className="relative z-10">
                <img src={image} />
            </div>
            <div className="absolute translate-x-[30px] top-[30px] z-0">
                <img src={frame}/>
            </div>

        </div>

      </div>
    </div>
  )
};

export default SignLogin;

import React from "react"
import { Link } from "react-router-dom";

const CustomButton = ({text,linkTo,isYellow}) => {
  return (
    <Link className="relative group transition-all delay-200" to={linkTo}>
        <div className={`relative z-50 ${isYellow?"bg-yellow-50 text-black ":"bg-richblack-800 text-white"} text-center rounded-lg px-[20px] py-[8px] group-hover:scale-95`}>
            {text}
        </div>
        <div className={`absolute z-10 top-[1px] right-[-1px] ${isYellow?"bg-yellow-5":"bg-richblack-600"} rounded-lg px-[20px] py-[8px] group-hover:scale-95`}>
            {text}
        </div>
    </Link>
  )
};

export default CustomButton;

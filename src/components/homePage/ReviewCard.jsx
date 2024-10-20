import React from "react"
import { FaStar } from "react-icons/fa6";
import image from '../../assets/Images/login.webp'

const ReviewCard = ({name,email,review}) => {
  return (
    <div className="flex flex-col text-pure-greys-50 text-sm gap-4 w-[250px] p-4 bg-richblack-800">
        <div className="flex flex-row gap-2 items-center">
            <img className="w-[40px] h-[40px] rounded-full" src={image}/>
            <div>
                <div> 
                    {name}
                </div>
                <div className="text-pure-greys-300">
                    {email}
                </div>
        </div>
            </div>
            <div className="text-pure-greys-200">
                {review}
            </div>
            <div className="flex flex-row text-xl gap-2 items-center text-yellow-200">
                <div>4</div>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/> 
                <FaStar className="text-richblack-700"/>
            </div>
    </div>
  )
};

export default ReviewCard;

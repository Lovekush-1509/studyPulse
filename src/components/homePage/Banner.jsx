import React from "react"
import videoBanner from "../../assets/Images/banner.mp4"
import imageBanner from '../../assets/Images/Instructor.png';


const Banner = ({isVideo}) => {
  return (
    <div>
      <div className="relative z-30">
            {
                isVideo?
                <video
                    autoPlay
                    muted
                    loop >
                    <source src={videoBanner} type="video/mp4" />
                </video>
                :
                <img className="custom_shadow2" src={imageBanner} alt="Not Loaded"></img>
            }
        </div>
        <div className= {`absolute z-10  ${isVideo?"top-[18px] left-[18px] w-[100%] h-[100%]":"custom_shadow2"} bg-pure-greys-5`}></div>
    </div>
  )
};

export default Banner;

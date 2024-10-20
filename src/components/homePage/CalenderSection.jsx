import React from "react"
import HighlightedText from "./HighlightedText";
import knowProgress from '../../assets/Images/Know_your_progress.svg';
import otherCompare from '../../assets/Images/Compare_with_others.svg';
import lessons from '../../assets/Images/Plan_your_lessons.svg';
import CustomButton from "./CustomButton";

const CalenderSection = () => {
  return (
    <div className="relative mx-auto w-full sm:w-[70%] mt-[120px] text-center p-3">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center w-[100%]">
            <div className="text-4xl">Your swiss knife for <HighlightedText text={"learning any language"}/></div>
            <div className="text-pure-greys-600 mt-4 w-[70%]">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
        </div>
    

       <div className="flex flex-col  sm:flex-row sm:w-[100%]">
            <div className="sm:-mr-20 -mb-10">
                <img src={knowProgress}/>
            </div>
            <div>
                <img src={otherCompare}/>
            </div>
            <div className="sm:-ml-32 -mt-16">
                <img src={lessons}/>
            </div>
       </div>

        <CustomButton text={"Learn More"} isYellow={true} linkTo={'/signup'}/>
 

      </div>
    </div>
  )
};

export default CalenderSection;

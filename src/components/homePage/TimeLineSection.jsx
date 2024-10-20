import React from "react";
import logo1 from '../../assets/TimeLineLogo/Logo1.svg';
import logo2 from '../../assets/TimeLineLogo/Logo2.svg';
import logo3 from '../../assets/TimeLineLogo/Logo3.svg';
import logo4 from '../../assets/TimeLineLogo/Logo4.svg';
import timelineImage from '../../assets/Images/TimelineImage.png';

const timeLine = [
    {
        logo:logo1,
        heading:"Leadership",
        para:"Fully committed to the success company"
    },
    {
        logo:logo2,
        heading:"Responsiblity",
        para:"Students will always be our top priority"
    },
    {
        logo:logo3,
        heading:"Flexiblity",
        para:"The ability to switch is an important skills"
    },
    {
        logo:logo4,
        heading:"Solve the problem",
        para:"Code your way to a solution"
    },
]

const TimeLineSection = () => {
  return (
    <div className=" flex sm:flex-row flex-col gap-6 w-full sm:w-4/5 justify-center items-center">

      <div className="relative w-full sm:w-[40%]">
        {
            timeLine.map((element,index) =>{
                return (
                    <div className="relative flex mt-[40px] gap-[15px] z-40">
                        <div className="h-[50px] w-[50px] flex justify-center items-center  bg-white rounded-full " key={index}>
                            <img src={element.logo}/>
                        </div>
                        <div>
                            <div>{element.heading}</div>
                            <div className="text-pure-greys-300 font-light">{element.para}</div>
                        </div>
                    </div>
                )})
        }
        <div className=" absolute z-10 top-[50px] left-7 h-[300px] w-[1px] border-[1px] border-dashed border-pure-greys-300"></div>
      </div>


      <div className="relative w-full sm:w-[50%] z-30">
        <div className="relative w-full sm:w-[80%]">
            <img className="w-full sm:w-[100%]" src={timelineImage}/>
        </div>


        <div className="absolute z-40 mx-auto -bottom-6 left-16 bg-caribbeangreen-700 flex p-5 text-white ">
            <div className="flex gap-2 justify-center items-center">
                <div className="text-[30px]">10</div>
                <div className="text-caribbeangreen-300 w-[70px] mr-7">YEARS EXPERIENCES</div>
            </div>
            <div className=" flex justify-center  gap-2 items-center border-l-2">
                <div className="ml-4 text-[30px]">250</div>
                <div className="text-caribbeangreen-300 w-[70px] mr-7">TYPES OF COURSES</div>
            </div>
        </div>
        <div className="absolute top-[110px] w-[490px] h-[200px] custom_shadow z-10 "></div>
      </div>

    </div>
  )
};

export default TimeLineSection;

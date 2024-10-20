import React from "react"
import { IoPeopleSharp } from "react-icons/io5";
import { TbChartCandleFilled } from "react-icons/tb";

const Cards = ({currentCard,courses,setCurrentCard}) => {
  console.log(courses)
  return (
    <div onClick={() => setCurrentCard(courses.heading)}>
      <div className={`relative flex flex-col ${currentCard === courses.heading?"bg-white":"bg-richblack-800"}  w-[321px] h-[250px] p-5  tracking-widest ${currentCard === courses.heading? "custom_shadow3":""} cursor-pointer`}>
        <div className={`${currentCard === courses.heading?"text-black":"text-white"} text-xl ` }>{courses.heading}</div>
        <p className="text-pure-greys-200 font-light mt-[15px]">{courses.description}</p>
        <div  className={`absolute bottom-0 left-0 flex justify-between ${currentCard === courses.heading?"text-blue-300":"text-pure-greys-300"} w-[100%] py-2 px-3 border-t-[1px] border-t-pure-greys-100 border-dashed font-medium`}>
            <div className="flex items-center gap-2">
                <IoPeopleSharp />
                <span className="">{courses.level}</span>
            </div>
            <div className="flex items-center gap-2">
                <TbChartCandleFilled />
            <span>
                {courses.lessionNumber}
            </span>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Cards;

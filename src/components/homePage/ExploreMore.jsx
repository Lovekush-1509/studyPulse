import React, { useState } from "react"
import {HomePageExplore} from "../../data/homepage-explore";
import Cards from './Cards';

const tabsName = [
    'Free',
    'New to coding',
    'Most popular',
    'Skills paths',
    'Career paths'
];
const ExploreMore = () => {


    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    console.log(currentCard,currentTab,courses);

    const setData = (val) =>{
        setCurrentTab(val);
        const result = HomePageExplore.filter((course) =>(val === course.tag));
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex flex-row bg-richblack-800 rounded-full px-2 py-1 mt-6">
        {
            tabsName.map((tab,index) =>{
                return (
                    <div className={`${currentTab === tab ? 'bg-richblack-900 text-pure-greys-5':'bg-richblack-800 text-pure-greys-50'} px-2 py-1 cursor-pointer
                    rounded-full flex justify-center items-center gap-4 text-sm `} key={index} onClick={()=>setData(tab)}>
                        {tab}
                    </div>
                )
        })}
      </div>

      <div className="mb-[150px]"></div>

      <div className="lg:absolute lg:-bottom-[200px] z-50 flex flex-col lg:flex-row mt-16 gap-8">
        {
            courses.map((element,index) =>{
                return (
                    <Cards  key={index} currentCard={currentCard} courses={element} setCurrentCard={setCurrentCard}/>
                )
            })
        }
      </div>
    </div>
  )
};

export default ExploreMore;

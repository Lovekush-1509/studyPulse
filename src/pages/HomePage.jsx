import React from "react"
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import HighlightedText from "../components/homePage/HighlightedText";
import CustomButton from "../components/homePage/CustomButton";
import Banner from "../components/homePage/Banner";
import "../App.css"
import TimeLineSection from "../components/homePage/TimeLineSection";
import CalenderSection from "../components/homePage/CalenderSection";
import ExploreMore from "../components/homePage/ExploreMore";
import ReviewCard from "../components/homePage/ReviewCard";
import Footer from "../components/homePage/Footer";


const HomePage = () => {
  return (
    <div className="relative z-0 w-screen flex flex-col">
      {/* section 1 */}
        <div className="relative">
          <div className="mt-16 relative mx-auto flex flex-col text-richblack-300 items-center">
            <Link className="group transition-all delay-200"  to="/signup">
                <button className="relative z-50 bg-richblack-800 flex gap-2 items-center py-[8px] px-[40px] rounded-full group-hover:scale-95">
                    <p>Become an Instructor</p>
                    <BiRightArrowAlt/>
                </button>
                <div className="absolute rounded-full bg-richblack-600 w-[240px] h-[38px] top-[1px] z-40 group-hover:scale-95"></div>
            </Link>


            <div className="text-white text-[30px] mt-8">Empower Your Future with <HighlightedText text={"Coding Skills"}/></div>


            <p className="w-[60%] text-center mt-4">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>

            <div className="flex gap-4 mt-9">
                <CustomButton text={"Learn More"} isYellow={true} linkTo={"/login"}/>
                <CustomButton text={"Book a Demo"} isYellow={false} linkTo={"/signup"}/>
            </div>
          





          {/* video banner  --------------------------------------------------------------*/}
          <div className="relative w-[60%] mx-auto my-14 boxShdaow">
            <Banner isVideo={true}/>
          </div>



      

        <div className="relative mx-auto mt-32 text-center tracking-widest">
            <div className="text-[40px]">Unlock the <HighlightedText text={"Power of Code"}/></div>
            <p className="text-pure-greys-200">Learn to Build Anything You Can Imagine</p>
        </div>

        {/* <div className="relative"> */}
          <ExploreMore/>
        {/* </div> */}
      </div>
      </div>



      {/* section 2 */}
      <div className="relative mx-auto mt-36 bg-pure-greys-5 w-full text-black ">
        <div className={`flex justify-center items-center h-[250px] homepage_bg`}>
            <div className="flex gap-3">
              <CustomButton text={<span className="flex items-center gap-1">Explore Full Catalogue <BiRightArrowAlt/></span>} linkTo={"/signup"} isYellow={true}/>
              <CustomButton text={"Learn More"} linkTo={"/login"} isYellow={false}/>
            </div>
        </div>



        <div className="relative mx-auto flex flex-col justify-center gap-[70px] sm:flex-row w-4/5 mt-[100px]">

          <div className="text-[30px] w-full sm:w-1/2">
            Get the Skills you need for a <HighlightedText text={"job that is in demand"}/>
          </div>

          <div className="flex flex-col gap-6 text-richblack-400 w-full sm:w-[50%] items-start">
            <div className="text-md">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
              <CustomButton text={"Learn More"} linkTo={"/signup"} isYellow={true}/>
          </div>

        </div>

        <div className="flex justify-center mt-16 w-full bg-pure-greys-5">
          <TimeLineSection/>
        </div>


        <CalenderSection/>


      </div>


      {/* section 3 */}
      <div className="relative  mt-[50px] bg-richblack-900 text-pure-greys-5 w-11/12">
          <div className="flex flex-col sm:flex-row gap-0">
            <div className="w-full sm:w-2/3 flex justify-center">
              <Banner isVideo={false}/>
            </div>

            <div className="mt-[50px] sm:mt-0 flex flex-col justify-center items-start gap-2 w-full sm:w-1/3">
              <div className="text-4xl flex flex-col">become an <HighlightedText text={"instructor"}/></div>
              <div className="text-pure-greys-200">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</div>
              <div className="mt-14">
                <CustomButton text={<span className="flex gap-1 items-center">Start Teaching Today <BiRightArrowAlt/></span> } isYellow={true} linkTo={'/signup'}/>
              </div>
            </div>

          </div>


        <div className="flex flex-col items-center w-full mt-12">
          <div className="text-pure-greys-25 text-3xl mt-16 mb-8">
              Reviews from other learners
          </div>
          <div className=' mx-auto flex lg:flex-row flex-col justify-center gap-4 w-full'>
            <ReviewCard name={"Cody Fisher"} email={"codyfisher@gmail.com"} review={"Coordination of activites improved tremendously with learning coding"}/>
            <ReviewCard name={"Estherd Howard"} email={"estherdhoward@gmail.com"} review={"Coordination of activites improved tremendously with learning coding"}/>
            <ReviewCard name={"Elener Pena"} email={"elenerpena@gmail.com"} review={"Coordination of activites improved tremendously with learning coding"}/>
            <ReviewCard name={"Criston Watson"} email={"cristonwatson@gmail.com"} review={"Coordination of activites improved tremendously with learning coding"}/>
          </div>
        </div>


      </div>


      {/* footer */}
      <div className="bg-richblack-800 mt-[100px]">
        <Footer/>
        <div className="flex lg:flex-row flex-col justify-between text-pure-greys-100 text-sm items-center p-10">
          <div className="flex flex-row gap-2">
            <p className="border-r-[1px] border-pure-greys-700">Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Term Policy</p>
          </div>


          <div>
            Made with CodeHelp &copy; 2024 StudyNotion
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
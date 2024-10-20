import React from "react";
import { FooterLink2, FooterLink1 } from "../../data/footer-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import {
  PiFacebookLogoFill,
  PiGoogleLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <div className="bg-richblack-800 flex lg:flex-row flex-col justify-center gap-16 p-16 border-t-[1px] border-pure-greys-700 border-b-[1px] ">
      {/* first side */}
      <div className="flex lg:flex-row flex-col gap-16 lg:border-r-[1px] border-pure-greys-700 pr-16">
        <div className="flex flex-col gap-3">
          <img className="w-[150px]" src={logo} />
          <FooterSection data={FooterLink1[0]} />
          <div className="flex flex-row text-xl text-pure-greys-50 gap-2">
            <PiFacebookLogoFill />
            <IoLogoTwitter />
            <PiGoogleLogoFill />
            <PiYoutubeLogoFill />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <FooterSection data={FooterLink1[1]}/>
          <FooterSection data={FooterLink1[2]}/>
        </div>

        <div className="flex flex-col gap-8">
          <FooterSection data={FooterLink1[3]}/>
          <FooterSection data={FooterLink1[4]}/>
        </div>
      </div>

      {/* Second side*/}

      <div className="flex lg:flex-row flex-col gap-16">
        {
          FooterLink2.map((elements,index) =>{
            return (
              <FooterSection data={elements} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Footer;

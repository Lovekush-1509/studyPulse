import React, { useEffect, useState } from "react"
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProfileDropDown from '../NavbarComp/ProfileDropDown';
import axios from "axios";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {

  const {token} = useSelector((state)=>state.auth);
  const {user} = useSelector((state)=>state.profile);
  const {totalItems} = useSelector((state)=>state.cart);
  const [temp,setTemp] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/studynotion/version-1.0/courseRoute/get-category')
      .then(response => {
        setTemp(response.data.data);
        console.log("tempData",response.data.data)
      })
      .catch(error => {
        console.error("error while fetching catalog in nav",error);
      });
  }, []);
  

  return (
    <div className="flex justify-around items-center border-b-[1px] border-richblack-700 h-[60px]">
      <Link to="/"><img className="h-[30px]" src={logo}/></Link>

      <ul className="flex gap-4">
        {
            NavbarLinks.map((link,index) =>{
                return <li  key={index}>
                    {
                        link.title === "Catalog"?
                        ( 
                              <div className="relative group">
                                 <Link className="flex items-center gap-[2px] group group-hover:translate-y-[-5px]">{link.title} <IoIosArrowDropdown/></Link>
                                  <div className="absolute invisible z-40 translate-x-[-50%] translate-y-[10%] flex flex-col justify-center items-center lg:w-[200px] bg-richblack-5 text-richblack-800 rounded opacity-0 group-hover:opacity-100 group-hover:visible transition-all delay-200">
                                    {
                                        temp.map((element,index) =>{
                                        return <Link className="border-b-[1px] border-richblack-25" key={index} to={element.courseName.replace(' ','-').toLowerCase()}>
                                            {element.courseName}
                                        </Link>
                                      })
                                    }
                                  </div>
                                  <div className="absoulte z-30 translate-x-[200%] translate-y-[10%] rotate-45 bg-richblack-5 group-hover:w-[15px] group-hover:h-[15px] opacity-0 group-hover:opacity-100  group-hover:visible transition-all delay-200"></div>
                              </div>
                             
                        )
                        :
                        (
                            <NavLink to={link.path}>
                                {link.title}                 
                            </NavLink>
                        )
                    }
                </li>
            })
        }
      </ul>




      <div className="flex gap-3 items-center">
        {
          user && user?.accountType != "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <FaCartShopping/>
            </Link>
          )
        }

        {
          token === null && (
            <Link to="/login">
              <button className="border-[1px] border-richblack-700 bg-richblack-800 px-[12px] py-[8px] rounded text-richblack-100">Log In</button>
            </Link>
          )
        }

        {
          token === null && (
            <Link to="/signup">
              <button className="border-[1px] border-richblack-700 bg-richblack-800 px-[12px] py-[8px] rounded text-richblack-100">
              Sign Up
              </button>
            </Link>
          )
        }

        {
          token !== null && <ProfileDropDown/>
        }
      </div>
    </div>
  )
};

export default Navbar;

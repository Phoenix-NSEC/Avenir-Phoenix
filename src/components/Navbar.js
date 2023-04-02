import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "../Assets/Css/navbarGlitch.css";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import bgGif from "../Assets/gifs/bgGif.gif"

function Navbar() {
  const [navState, setNaState] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    setNaState(!navState);
  };
  const location = useLocation();

  useEffect(() => {
    setNaState(false);
  }, [location]);

  return (
    <div className="navbar flex z-50 w-full text fixed top-0 left-0" style={{backgroundImage: `url(${bgGif})`}}>
      <div
        className="absolute md:hidden top-50 left-[2.75px] z-[1000]"
        onClick={handleNav}
      >
        {!navState ? (
          <HiMenuAlt1 className="h-[30px] w-[30px] text-white" />
        ) : (
          <HiX className="h-[30px] w-[30px] text-white bg-red-500" />
        )}
      </div>
      {/* <div className="icon md:w-30 w-full justify-center   py:2 md:py-3 flex  " onClick={()=>navigate("/home")}>
        <img src={logo} alt="" width="100px" />
      </div> */}
      <div
        className={`menu  flex justify-center fixed top-0 left-0 w-screen pt-6 md:w-70 h-full md:h-auto md:relative bg-black backdrop-blur-[8px] bg-transparent md:block ${
          !navState ? "hidden" : "flex"
        }`}
      >
        <ul className="flex flex-col justify-center items-center md:flex-row gap-10 font-bold py-3 text-[1.4rem] md:text-[.5rem] lg:text-[.9rem] text-white font-orbitron">
          <NavLink to="/">
            <li className="text-[20px] text-center glitch-effect mx-6">Home</li>
          </NavLink>
          <NavLink to="/events">
            <li className="text-[20px] text-center glitch-effect mx-6">Events</li>
          </NavLink>
          <NavLink to="about">
            <li className="text-[20px] text-center glitch-effect mx-6">About us</li>
          </NavLink>
          <NavLink to="patners">
            <li className="text-[20px] text-center glitch-effect mx-6">Partners</li>
          </NavLink>
          <NavLink to="team">
            <li className="text-[20px] text-center glitch-effect mx-6">Team</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

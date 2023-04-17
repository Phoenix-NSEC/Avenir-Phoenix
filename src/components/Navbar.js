import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from '../Assets/Images/logo1.png'
import "../Assets/Css/navbarGlitch.css";
import anLogo from '../Assets/Images/logo3.png'
import { HiMenuAlt1, HiX } from "react-icons/hi";

function Navbar() {
  const [navState, setNaState] = useState(false);
  const [path, setPath] = useState("/");
  const navigate = useNavigate();
  const handleNav = () => {
    setNaState(!navState);
  };
  const location = useLocation();

  useEffect(() => {
    setNaState(false);
    setPath(location.pathname);
  }, [location]);

  return (
    <div
      className="navbar flex justify-center items-center z-50 lg:absolute fixed top-0 left-0"
    >
      <div
        className="absolute md:hidden top-50 top-[2.75px] left-[2.75px] z-[1000]"
        onClick={handleNav}
      >
        {!navState ? (
          <HiMenuAlt1 className="h-[30px] w-[30px] text-white" />
        ) : (
          <HiX className="h-[30px] w-[30px] text-white bg-red-500" />
        )}
      </div>
      <div className="icon md:flex md:flex-col md:justify-center hidden md:w-30 py:2 md:py-3 z-10 relative top-[12px] left-[10%] " >
        <a href='https://phoenixnsec.in/' target="_blank"><img src={logo} alt="logo of PHOENIX" width="70px" height="10px" className="border-r-2 pr-8 hover:cursor-pointer" /></a>
      </div>
      <div className="icon md:flex md:flex-col md:justify-center hidden md:w-30 py:2 md:py-3 z-10 relative top-[12px] left-[10%] " onClick={() => { navigate('/') }}>
        <img src={anLogo} alt="logo of PHOENIX" width="70px" height="10px" className="pl-8 hover:cursor-pointer" />
      </div>
      <div
        className={`menu  flex justify-center fixed top-0 left-0 w-screen pt-6 md:w-70 min-h-full md:h-auto md:relative md:bg-none md:backdrop-blur-[0px] bg-black backdrop-blur-[8px] bg-transparent md:block ${!navState ? "hidden" : "flex"
          }`}
      >
        <ul className="flex flex-col mb-[140px] md:mb-[0px] justify-center items-center min-h-full md:flex-row gap-10 font-bold py-3 text-[1.4rem] md:text-[.5rem] lg:text-[.9rem] text-white font-orbitron">
          <div className="flex flex-row justify-center pb-[65px] md:pb-[0px]">
            <li className="md:hidden h-9"
            >
              <a href='https://phoenixnsec.in/' target="_blank"><img src={logo} alt="logo of PHOENIX" width="65px" height="10px" className="border-r-2 hover:cursor-pointer pr-6" /></a>
            </li>
            <li
              className="md:hidden"
            >
              <img src={anLogo} alt="logo of PHOENIX" width="70px" height="10px" className="hover:cursor-pointer pl-6" onClick={() => { navigate('/') }} />
            </li>
          </div>
          <NavLink to="/">
            <li
              className={
                path === "/"
                  ? " border-b-2 text-[20px] text-center glitch-effect mx-6"
                  : "text-[20px] text-center glitch-effect mx-6"
              }
            >
              Home
            </li>
          </NavLink>
          <NavLink to="/events">
            <li
              className={
                path === "/events"
                  ? " border-b-2 text-[20px] text-center glitch-effect mx-6"
                  : "text-[20px] text-center glitch-effect mx-6"
              }
            >
              Events
            </li>
          </NavLink>
          <NavLink to="about">
            <li
              className={
                path === "/about"
                  ? " border-b-2 text-[20px] text-center glitch-effect mx-6"
                  : "text-[20px] text-center glitch-effect mx-6"
              }
            >
              About us
            </li>
          </NavLink>
          {/* <NavLink to="patners">
            <li
              className={
                path === "/partners"
                  ? " border-b-2 text-[20px] text-center glitch-effect mx-6"
                  : "text-[20px] text-center glitch-effect mx-6"
              }
            >
              Partners
            </li>
          </NavLink> */}
          <NavLink to="teams">
            <li
              className={
                path === "/teams"
                  ? " border-b-2 text-[20px] text-center glitch-effect mx-6"
                  : "text-[20px] text-center glitch-effect mx-6"
              }
            >
              Team
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

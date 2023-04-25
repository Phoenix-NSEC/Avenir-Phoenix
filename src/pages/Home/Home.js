import React, { useEffect, useState } from "react";
import Clock from "../../components/Clock";
import bgGif from '../../Assets/gifs/bgGif.gif'
import logo from '../../Assets/gifs/logo2.gif'
import "../../Assets/Css/navbarGlitch.css"
import "./Home.css";
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";


function Home() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [completed, setCompleted] = useState(false);
  const [days, setDays] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 5,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        setCompleted(true);
        setDays(days * -1);
        clearInterval(interval);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className={`flex flex-col md:min-h-screen min-h-[100vh] sub-body`} style={{ backgroundImage: `url(${bgGif})`, backgroundSize: "cover" }}>
      <div className="kunal min-h-screen"></div>
      <div className="flex md:flex-row relative md:right-[50px] flex-col-reverse md:justify-around md:items-end items-center justify-center md:min-h-[75vh] min-h-[100vh] max-w-full md:w-50 z-10">
        <div className="flex flex-col justify-evenly relative md:left-[100px] md:top-[50px] lg:items-start items-center ">
          <div className="name pb-1 md:pl-5">
            <h1 className="glitch md:text-[150px] text-[90px] text-[#FF5757] z-10">
              <span aria-hidden="true z-10">AVENIR'23</span>
              AVENIR'23
              <span aria-hidden="true z-10">AVENIR'23</span>
            </h1>
          </div>
          <div className="caption pb-5 md:pl-5 relative bottom-2">
            <p className="md:text-[20px] text-[15px] text-center text-[#CB6CE6] font-bold font-audiowide">
              Beyond Infinity
            </p>
          </div>
          {!completed ? (
            <Clock
              timerDays={timerDays}
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
            />
          ) : (
            <p className="clock text-purple-600 lg:text-[40px] lg:pl-4 text-[25px] text-center">
              {days < 4 ? `Day ${days} is going on` : "Coming soon"}
            </p>
          )}
        </div>
        <div className="text-white pb-[30px] lg:pb-0 lg:block lg:mt-4">
          <img className="lg:w-[280px] w-[120px]"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex fixed lg:left-[20px] left-1/2 transform -translate-x-1/2 bottom-[120px] lg:flex-col flex-row lg:justify-center justify-evenly items-center lg:h-[161px] lg:w-[50px] h-[5%] w-[300px] lg:ml-[40px] text-white z-10">
        <a href="https://www.instagram.com/phoenix_nsec/" target="_blank" className="glitch-effect py-4">
          <FiInstagram
            size={"30px"}
            className=" hover:cursor-pointer "
          />
        </a>
        <a href="https://www.facebook.com/phoenix.avenir" target="_blank" className="glitch-effect py-4">
          <FiFacebook
            size={"30px"}
            className=" hover:cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/company/phoenix-the-official-tech-club-of-netaji-subhash-engineering-college/" target="_blank" className="glitch-effect py-4">
          <FaLinkedinIn
            size={"30px"}
            className=" hover:cursor-pointer"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCBy1iIhw34E7YlHQ8tc4rDA" target="_blank" className="glitch-effect py-4">
          <AiOutlineYoutube
            size={"30px"}
            className=" hover:cursor-pointer"
          />
        </a>
        <a href="tel:9073560833" target="_blank" className="glitch-effect py-4">
          <FiPhone
            size={"30px"}
            className=" hover:cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;

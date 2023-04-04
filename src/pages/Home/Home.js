import React, { useEffect, useState } from "react";
import Clock from "../../components/Clock";
import { FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "../../Assets/Css/navbarGlitch.css"
import "./Home.css";

function Home() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [completed, setCompleted] = useState(false);
  const [days, setDays] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 4,2023 ").getTime();

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
    <div className={`flex flex-col md:min-h-screen sub-body`}>
      <div className="kunal"></div>
      <div className="flex relative md:justify-around md:items-end items-center justify-center md:h-[70vh] h-[100vh] max-w-full md:w-50 z-10">
        <div className="flex flex-col justify-evenly lg:items-start items-center ">
          <div className="pb-1 md:pl-5">
            <h1 className="glitch md:text-[150px] text-[70px] font-gugi text-white z-10">
              <span aria-hidden="true z-10">AVENIR</span>
              AVENIR
              <span aria-hidden="true z-10">AVENIR</span>
            </h1>
          </div>
          <div className="pb-5 md:pl-5 relative bottom-2">
            <p className="md:text-[20px] text-[15px] text-center text-blue-500 font-audiowide">
              Lorem Picsum · The Lorem Ipsum for photos. · Easy to use, stylish
              placeholders{" "}
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
            <p className=" text-purple-600 lg:text-[40px] lg:pl-4 text-[25px] text-center font-audiowide">
              {days < 5 ? `Day ${days} is going on` : "Comming soon"}
            </p>
          )}
          <div className="flex mt-5 relative top-[222px] justify-around w-[70%] lg:hidden text-white">
            <a href="www.google.com" target="_blank">
              <FiInstagram
                size={"30px"}
                className=" hover:cursor-pointer hover:text-purple-500"
              />
            </a>
            <a href="www.google.com" target="_blank">
              <FiFacebook
                size={"30px"}
                className=" hover:cursor-pointer hover:text-purple-500"
              />
            </a>
            <a href="www.google.com" target="_blank">
              <FaLinkedinIn
                size={"30px"}
                className=" hover:cursor-pointer hover:text-purple-500"
              />
            </a>
            <a href="tel:7439596599" target="_blank">
              <FiPhone
                size={"30px"}
                className=" hover:cursor-pointer hover:text-purple-500"
              />
            </a>
          </div>
        </div>
        <div className="text-white hidden lg:block">
          <img
            className="h-[300px] w-[300px] lg:h-[500px]"
            src="https://picsum.photos/200/300"
          />
        </div>
      </div>
      <div className="hidden lg:flex  lg:flex-col justify-around items-start ml-[40px] mb-6 text-white h-[25vh] z-10">
        <a href="www.google.com" target="_blank" className="glitch-effect">
          <FiInstagram
            size={"30px"}
            className=" hover:cursor-pointer "
          />
        </a>
        <a href="www.google.com" target="_blank" className="glitch-effect">
          <FiFacebook
            size={"30px"}
            className=" hover:cursor-pointer"
          />
        </a>
        <a href="www.google.com" target="_blank" className="glitch-effect">
          <FaLinkedinIn
            size={"30px"}
            className=" hover:cursor-pointer"
          />
        </a>
        <a href="tel:7439596599" target="_blank" className="glitch-effect">
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

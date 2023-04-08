import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
    <style>
      {`
        @font-face {
          font-family: Mokoto;
          src: url('../Assets/Fonts/Mokoto\ Glitch\ Mark\ 2.ttf');
        }
        p{
          font-family:Mokoto;
        }
      `}
    </style>
      <div className="flex justify-center items-center">
        <div className="flex p-3">
          <div className="flex justify-center flex-col">
            <p className="text-[20px] md:text-[60px] text-center   text-teal-500">{timerDays}</p>
            <div className=" text-sky-600 text-[10px] md:text-[20px] font-orbitron">Days</div>
          </div>
          <div className="text-[30px] md:text-[50px]   md:pl-3 pl-1 text-gray-400">:</div>
        </div>
        <div className="flex p-3 ">
          <div className="flex justify-center flex-col">
            <p className="text-[20px] md:text-[60px] text-center   text-teal-500">{timerHours}</p>
            <div className=" text-sky-600 text-[10px] md:text-[20px] font-orbitron">Hours</div>
          </div>
          <div className="text-[20px] md:text-[50px]   md:pl-3 pl-1 text-gray-400">:</div>
        </div>
        <div className="flex p-3 ">
          <div className="flex justify-center flex-col">
            <p className="text-[20px] md:text-[60px]   text-center text-teal-500">{timerMinutes}</p>
            <div className=" text-sky-600 text-[10px] md:text-[20px] font-orbitron">Minutes</div>
          </div>
          <div className="text-[30px] md:text-[50px]   md:pl-3 pl-1 text-gray-400">:</div>
        </div>
        <div className="flex flex-col p-3">
          <div className="flex justify-center ">
            <p className="text-[20px] md:text-[60px]   text-teal-500">{timerSeconds}</p>
          </div>
          <div className="text-sky-600 text-[10px] md:text-[20px] font-orbitron">Seconds</div>
        </div>
      </div>
    </>
  );
};

export default Clock;

import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex p-3">
          <div className="d-flex justify-content-center flex-column">
            <p className="fs-1 App-link">{timerDays}</p>
            <div className="text-info">Days</div>
          </div>
          <div className="fs-1 px-md-3 px-sm-1 clock-divider">:</div>
        </div>
        <div className="d-flex p-3 ">
          <div className="d-flex justify-content-center  flex-column">
            <p className="fs-1 App-link">{timerHours}</p>
            <div className="text-info">Hours</div>
          </div>
          <div className="fs-1 px-md-3 px-sm-1 clock-divider">:</div>
        </div>
        <div className="d-flex p-3 ">
          <div className="d-flex justify-content-center  flex-column">
            <p className="fs-1 App-link">{timerMinutes}</p>
            <div className="text-info">Minutes</div>
          </div>
          <div className="fs-1 px-md-3 px-sm-1 clock-divider">:</div>
        </div>
        <div className="d-flex flex-column p-3">
          <div className="d-flex fs-1 justify-content-center ">
            <p className="App-link">{timerSeconds}</p>
          </div>
          <div className="text-info">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

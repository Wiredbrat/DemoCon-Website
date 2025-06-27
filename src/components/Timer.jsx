import React, { useState, useEffect} from 'react'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Timer() {

  const calculateTimeLeft = () => {
  const eventDate = new Date("2025-12-11T08:30:00");
  const now = new Date();
  const difference = eventDate - now;

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = null;
  }

  return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const colors = {
    days: "#00b3e9",
    hours: "#ff6600",
    minutes: "#28a745",
    seconds: "#dc3545",
  };

  const units = [
    { label: "Days", value: timeLeft.days ?? 0, max: 365, color: colors.days },
    { label: "Hours", value: timeLeft.hours ?? 0, max: 24, color: colors.hours },
    { label: "Minutes", value: timeLeft.minutes ?? 0, max: 60, color: colors.minutes },
    { label: "Seconds", value: timeLeft.seconds ?? 0, max: 60, color: colors.seconds },
  ];

  return (
    <div className='bg-white lg:px-4 max-w-3xl w-[95%] sm:w-[75%] lg:w-[90%] mx-auto h-fit rounded-2xl shadow-2xl py-4 '>
      {timeLeft && (
  <div className="mt-3 flex flex-col items-center lg:grid lg:grid-cols-3 gap-2 justify-center text-red-500">
    <p className="text-sm lg:ps-8 sm:text-base mb-4 items-center lg:col-span-1 "><strong>STILL COUNTING UNTIL STARTED!</strong></p>
    <div className=" lg:px-8 grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 lg:col-span-2">
      {units.map((unit, i) => (
        <div key={i} className="w-16 h-16 sm:w-24 sm:h-24">
          <CircularProgressbarWithChildren
            value={unit.value}
            maxValue={unit.max}
            styles={buildStyles({
              pathColor:`${unit.color}`,
              trailColor: "#eee",
              strokeLinecap: "round",
            })}
          >
            <div className="text-sm font-semibold text-black">{unit.value}</div>
            <div className="text-[10px] text-gray-600">{unit.label}</div>
          </CircularProgressbarWithChildren>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
  )
}

export default Timer
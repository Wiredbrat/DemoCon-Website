import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const imagesUp = [
  // Replace these URLs with actual image URLs or import your assets
  "../assets/1.png",
  "../assets/2.png",
  "../assets/3.png",
  "../assets/4.png",
  "../assets/5.png",
  "../assets/6.png",
];

const imagesDown = [
  // Replace these URLs with actual image URLs or import your assets
  "../assets/7.png",
  "../assets/8.png",
  "../assets/9.png",
  "../assets/10.png",
  "../assets/11.png",
  "../assets/12.png",
];

const MarqueeCards= () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4 lg:p-12">
      {/* Vertical Scrolling Columns */}
      <div className="flex gap-4 w-full lg:w-1/2 lg:max-h-[400px] max-h-75 overflow-hidden justify-center">
        {/* Column 1 (scrolls up) */}
        <motion.div
          className="flex flex-col gap-4 min-h-[600px]"
          animate={{ y: [0, -600] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {imagesUp.concat(imagesUp).map((src, i) => (
            <img
              key={"up" + i}
              src={src}
              alt="event"
              className="rounded-lg object-cover w-full h-40 lg:h-48"
            />
          ))}
        </motion.div>

        {/* Column 2 (scrolls down) */}
        <motion.div
          className="flex flex-col gap-4 min-h-[600px]"
          animate={{ y: [-600, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {imagesDown.concat(imagesDown).map((src, i) => (
            <img
              key={"down" + i}
              src={src}
              alt="event"
              className="rounded-lg object-cover w-full h-40 lg:h-48"
            />
          ))}
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h4 className="text-sm text-blue-500 uppercase tracking-widest font-semibold">
          Best Professional Event 2025
        </h4>
        <h1 className="text-3xl lg:text-5xl font-bold mt-2 leading-tight">
          Vizag: City of Beaches
        </h1>
        <p className="mt-4 text-gray-600 text-base lg:text-lg">
          Confluence of Innovation and Excellence in Neonatology
        </p>
        <p className="mt-4 text-gray-500 text-sm lg:text-base">
          We warmly invite you to NEOCON 2025, a premier gathering that brings together leading minds in Neonatology, Pediatrics, and Healthcare to explore groundbreaking advancements and emerging trends. 
        </p>
        <p className="mt-2 text-gray-500 text-sm lg:text-base">
          This enriching event is tailored to inspire innovation, foster collaboration, and advance knowledge among healthcare professionals, researchers, and academicians.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Buy Ticket
          </button>
          <Link to={'/host-city'} className=" cursor-pointer border border-blue-500 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarqueeCards;

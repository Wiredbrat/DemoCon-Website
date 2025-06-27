import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faTicketAlt,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function VideoCard() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative bg-transparent text-white">
      <div className=" relative overflow-clip inset-0 z-0 ">
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover lg:h-[500px] opacity-70 object-center"
          src="../assets/vizag.mp4"
        ></video>
        
        <div className="absolute top-0 w-full h-full z-10 flex flex-col items-center justify-center text-center px-4 bg-[#000000b1]">
          <p className="text-sm uppercase tracking-widest text-purple-300 mb-2">
            A Confluence of Innovation and Excellence in Neonatology
          </p>
          <h1 className="text-2xl md:text-5xl font-bold leading-tight overflow-hidden">
            <span className="block animate-reveal ">Join us at</span> 
            <span className="block animate-reveal">
              <span className="text-purple-400">NEO</span>CON <span className="text-red-400">2025</span>
            </span>
          </h1>
          <button className="mt-6 hidden md:block">
            <FontAwesomeIcon icon={faPlayCircle} className="text-blue-500 text-6xl " />
          </button>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className="relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10 bg-transparent text-black max-w-5xl mx-auto rounded-t-3xl lg:mt-[-120px]"
      >
        <div className="flex flex-col items-center text-center px-4 py-8 bg-white shadow-xl border border-gray-100 rounded-xl">
          <FontAwesomeIcon icon={faClock} className="text-4xl text-purple-400 mb-2" />
          <h3 className="font-bold text-lg">Time & Schedule</h3>
          <p className="text-sm">11-14 Dec, 2025</p>
          <p className="text-sm">10:00 am - 11:00 am</p>
        </div>

        <div className="flex flex-col items-center text-center px-4 py-8 bg-white shadow-xl border border-gray-100 rounded-xl">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl text-pink-400 mb-2" />
          <h3 className="font-bold text-lg">Area & Direction</h3>
          <p className="text-sm"> Novotel Visakhapatnam Varun Beach</p>
          <p className="text-sm">Visakhapatnam, India</p>
        </div>

        <div className="flex flex-col items-center text-center px-4 py-8 bg-white shadow-xl border border-gray-100 rounded-xl">
          <FontAwesomeIcon icon={faTicketAlt} className="text-4xl text-green-400 mb-2" />
          <h3 className="font-bold text-lg">For More Info</h3>
          <p className="text-sm ">Support:<span className="text-blue-500"> neocon2025@gmail.com</span></p>
          <p className="text-sm ">Call:<span className="text-red-500"> +91-98856 62593 or<br/> +91-88867 09408</span></p>
        </div>
      </motion.div>
    </div>
  );
}

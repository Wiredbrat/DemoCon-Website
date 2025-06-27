import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";


function PageTitle({pageNameColored, pageText, pageNameUncolored, bgImage}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div>
      <div className='h-18 bg-linear-to-r to-cyan-500 from-blue-500 shadow '></div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className={`h-46 shadow mb-12 bg-[url('/assets/background.jpg')] bg-cover bg-center bg-origin-border w-full text-2xl lg:text-4xl font-semibold`}
      >
        <div className='h-46 w-full bg-[#0000004d] flex flex-col items-center justify-center '>
        <p className='text-base font-normal text-white'>{pageText}</p>
        <p className='text-center'>
          <span className='text-red-500'>{pageNameColored} </span>
          <span className='text-white'>{pageNameUncolored}</span>
        </p>
        </div>
      </motion.div>
    </div>
  )
}

export default PageTitle
import React from 'react'
import SplitText from "./SplitText.jsx";

function Hero() {
  return (
    <div className='max-h-[80vh] h-[67vh] lg:h-[68vh] xl:h-[65vh] 2xl:h-[57vh] overflow-clip w-full flex justify-center items-center'>
      <video 
      src="../assets/ocean.mp4" 
      autoPlay={true} 
      loop={true} 
      muted={true}
      className='absolute xl:block top-0 left-0 w-full h-[90vh] lg:[h-95vh] xl:h-[87vh] 2xl:h-[75vh] object-cover'
      >
      </video>
      <div className='z-10 absolute top-0 h-[90vh] lg:[h-95vh] xl:h-[87vh] 2xl:h-[75vh] w-full bg-linear-to-b from-[#000000ac] to-[#ffffff2e] flex items-center justify-center'>
        <div>
        <h3 className="m-0 text-center text-5xl lg:text-6xl text-red-400 overflow-hidden leading-none">
          <span className="block animate-reveal font-bold opacity-0 ">44th</span>
        </h3>
        <h3 className="text-white m-0 text-center text-3xl lg:text-5xl overflow-hidden leading-none">
          <span className="block animate-reveal font-sans font-bold opacity-0">Annual Conference of the</span>
        </h3>
        <h3 className="text-white m-0 text-center text-3xl lg:text-5xl overflow-hidden leading-none ">
          <span className="block animate-reveal font-bold text-shadow-lg pb-2 opacity-0">National Neonatology Forum</span>
        </h3>
        <h5 className='overflow-hidden leading-none md:grid md:grid-cols-1 text-center gap-4 text-lg lg:text-2xl font-bold'>
          <span className='block animate-slide opacity-0 text-amber-400 text-shadow-md '>11th-14th December 2025</span>
          <span className='block animate-slide opacity-0 col-start-2 text-white text-shadow-md '>Novotel Visakhapatnam Varun Beach</span>
        </h5>
        </div>
      </div>
    </div>
  )
}

export default Hero
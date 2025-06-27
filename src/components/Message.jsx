import React, { useState } from 'react'
import { motion} from "framer-motion";

function Message({message , colorTitle, nonColorTitle }) {

  const [showFull, setShowFull] = useState(false);

  return (
      <div className="bg-gray-100 py-16 px-6 max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"><span className='text-red-500'>{colorTitle}</span> {nonColorTitle}</h2>
        <motion.div
          initial={{ height: showFull ? "auto" : 250, opacity: 1 }}
          animate={{ height: showFull ? "auto" : 250 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden text-gray-700 whitespace-pre-wrap text-justify"
        >
          {message}
          {!showFull && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent" />
          )}
        </motion.div>
        <div className="text-center mt-6">
          <button
            onClick={() => setShowFull(!showFull)}
            className="inline-block px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-transform duration-300"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
  )
}

export default Message
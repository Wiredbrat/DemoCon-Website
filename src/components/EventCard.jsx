import { motion } from "framer-motion";
import { Link } from "react-router";

export default function EventCard() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 lg:px-6 my-6 gap-4 md:gap-6">
      {/* Image Grid - Left */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="gap-4 w-full md:w-1/2 md:order-2"
      >
        
       <img
          src="src/assets/novotel3.jpg"
          alt="Attendee 1"
          className="rounded-lg shadow-md object-cover w-full h-fit"
        />
        
      </motion.div>

      {/* Text Content - Right */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 md:mt-0 "
      >
       
        
           <h5 className="text-blue-500 text-sm lg:text-base font-semibold uppercase mb-2">
          Novotel Visakhapatnam Varun Beach!
        </h5>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Where Luxury Meets the Bay of Bengal!
        </h2>
        <p className="text-blue-600 font-medium text-lg mb-2">
          The biggest largest widest anticipated Web Conference.
        </p>
        <p className="text-gray-600 mb-6">
          Nestled along the tranquil coastline of the Bay of Bengal, Novotel Visakhapatnam Varun Beach offers an exquisite blend of sophistication, comfort, and breathtaking views. Ideally situated in the heart of the city, the hotel stands as a landmark of contemporary elegance and warm hospitality.
        </p>
        <div className="flex gap-4">
          <Link to=''>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow cursor-pointer hover:bg-blue-700 transition">
             Book Now
          </button>
          </Link>
          <Link to={'about-venue'} className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition">
             Learn More
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
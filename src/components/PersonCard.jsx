import { color, motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faTicketAlt,
  faPlayCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function PersonCard({
  speakers=[], 
  unColorTitle ='Our', 
  colorTitle= 'Title',
  subtitle = 'subtitle'
}) {

  return (
    <div className="bg-blue-100 py-16 px-6 text-center mb-10">
      <p className="uppercase text-sm text-blue-400">{subtitle}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        {unColorTitle} <span className="text-red-500">{colorTitle}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8 max-w-6xl mx-auto">
        {speakers.map((speaker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-lg p-4 text-center"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-28 h-28 mx-auto rounded-xl object-cover mb-4"
            />
            <p className="font-semibold md:text-lg">{speaker.name}</p>
            <p className="text-sm text-blue-500">{speaker.role}</p>
            {/* <button className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} />
            </button> */}
          </motion.div>
        ))}
      </div>
    </div>
 )
}

export default PersonCard
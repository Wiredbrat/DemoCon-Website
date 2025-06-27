import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ title, items, iconType = "check" }) => {
  // const iconMap = {
  //   check: <i class="fas fa-check-circle"></i>,
  //   clock: <i class="fa fa-clock-o" aria-hidden="true"></i>,
  //   phone: <faPhoneAlt/>,
  //   email: <faEnvelope/>,
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, behavior: 'smooth' }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <ul className="space-y-3 text-gray-700">
        {/* {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FontAwesomeIcon
              // icon={iconMap[item.icon || iconType]}
              className="text-indigo-500 mt-1"
            />
            <span>{item.text}</span>
          </li>
        ))} */}
      </ul>
    </motion.div>
  );
};

export default Card
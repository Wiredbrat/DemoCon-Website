// components/PricingCard.jsx
import { motion } from "framer-motion";

export default function PricingCard({
  // plan = "Standard",
  price = "$120",
  title = "Icon sets",
  description = "Up to 10 creative & professional icons + two color versions/themes.",
  features = [
    "Included source files",
    "Converted to responsive components",
  ],
  bgColor = "bg-white",
  accentColor = "bg-blue-600 hover:bg-blue-700",
}) {
  return (
    <motion.div
      className={`rounded-2xl shadow-xl p-6 max-w-[90%] mx-auto w-full ${bgColor}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
        viewport={{ once: true }}
    >
      <div className="flex justify-center mb-4">
        <div className="flex space-x-6 bg-gray-100 p-1 rounded-full">
          {/* {["Basic", "Standard", "Premium"].map((item) => (
            <button
              key={item}
              className={`px-4 py-1 text-sm rounded-full transition-colors duration-300 ${
                item === plan ? `${accentColor} text-white` : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))} */}
        </div>
      </div>

      <div className="text-center">
        {/* <p className="text-xs font-semibold text-gray-500 uppercase">{plan}</p> */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <p className="text-lg font-bold mt-2">{price}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>

      <ul className="mt-4 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
            <span className="text-blue-500">✔️</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileTap={{ scale: 0.97 }}
        className={`mt-6 cursor-pointer w-full py-2 rounded-full text-white font-semibold shadow-lg ${accentColor}`}
      >
        Know More
      </motion.button>
    </motion.div>
  );
}

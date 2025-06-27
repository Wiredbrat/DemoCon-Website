import { motion } from "framer-motion";

 const AnimatedCard = ({ title, content, image, reverse, bgColor='bg-blue-50' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={` rounded-2xl flex flex-col md:flex-row ${
        reverse ? " md:flex-row-reverse" : `lg:${bgColor}`
      } items-center gap-6 mb-16 `}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-xl shadow-md object-cover h-56 md:h-96 lg:86"
      />
      <div className="w-full md:w-1/2 md:pe-5">
        <h3 className="md:text-2xl text-xl text-center md:text-left font-bold mb-4 bg-blue-200 p-3 rounded-2xl">{title}</h3>
        <div className="text-gray-700 space-y-2 md:ps-3 pe-3">{content}</div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard
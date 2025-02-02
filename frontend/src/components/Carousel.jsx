import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const items = Array.isArray(children) ? children : [children];

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          className="p-6 bg-grey rounded-xl shadow-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {items[current]}
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-2 bg-green-600 text-white px-3 py-1 rounded-full"
        onClick={nextSlide}
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
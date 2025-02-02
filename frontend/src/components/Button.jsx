import { motion } from "framer-motion";

const Button = ({ children, className = "", onClick }) => {
  return (
    <motion.button
      className={`bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 font-bold tracking-wide ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
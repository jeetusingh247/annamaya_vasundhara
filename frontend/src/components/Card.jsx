import { motion } from "framer-motion";

const Card = ({ title, content, className, children }) => {
    return (
        <motion.div
            className={`p-6 bg-white shadow-lg rounded-2xl ${className}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
            {content && <p>{content}</p>}
            {children}
        </motion.div>
    );
};

export default Card;
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import earthImg from "../assets/images/smile_earth01.png"; // Smiling Earth
import treeImg from "../assets/images/smile_tree_growing.png"; // Tree growing
import leafImg from "../assets/images/smile_leaf.png"; // Floating leaf
import butterflyImg from "../assets/images/butterfly01.png"; // Fluttering butterfly

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* 🍃 Floating Leaves */}
        <motion.img 
          src={leafImg} 
          alt="Floating Leaf" 
          className="absolute top-10 mt-10 mr-15 left-10 w-52 h-52 opacity-90"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.img 
          src={leafImg} 
          alt="Floating Leaf" 
          className="absolute bottom-20 right-20 w-48 h-48 opacity-90"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 4 }}
        />

        {/* 🌍 Title Animation */}
        <motion.h1 
          className="text-6xl font-bold text-green-700 drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Welcome to <span className="text-yellow-500 ml-5 mr-10">Annamaya Vasundhara</span>
        </motion.h1>

        <motion.p 
          className="mt-4 text-xl text-gray-700 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Join us in a magical adventure to save Mother Earth! 🌱  
          Watch trees grow, nature bloom, and help make the world greener.  
        </motion.p>

        {/* 🌏 Smiling Earth Animation */}
        <motion.img 
          src={earthImg} 
          alt="Smiling Earth" 
          className="w-80 h-80 mt-6"
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* 🌳 Growing Tree Animation */}
        <motion.img 
          src={treeImg} 
          alt="Growing Tree" 
          className="w-60 h-60 mt-6"
          initial={{ scaleY: 0 }} 
          animate={{ scaleY: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* 🦋 Fluttering Butterfly */}
        <motion.img 
          src={butterflyImg} 
          alt="Butterfly" 
          className="absolute top-6 right-12 w-20 h-20"
          animate={{ y: [0, -20, 0], x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* 🚀 Call to Action */}
        <motion.button 
          className="mt-6 bg-green-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 font-bold tracking-wide text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Your Green Adventure 🌱
        </motion.button>
        
      </main>
      <Footer />
    </>
  );
};

export default Home;

import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FaTree, FaLeaf, FaUsers } from "react-icons/fa";
import Carousel from "../components/Carousel.jsx"; // Ensure this is the correct import
import Card from "../components/Card.jsx"; // Ensure correct component import
import Button from "../components/Button.jsx"; // Ensure correct import

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* 🌍 Hero Section with Animated Background */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center text-center text-grey bg-green-700 overflow-hidden">
        <motion.h1
          className="text-5xl text-grey font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Your Eco Dashboard 🌱
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Track your impact, stay inspired, and join the green movement!
        </motion.p>
      </section>

      {/* 📊 Quick Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
        <Card className="p-6 text-center bg-white shadow-lg rounded-2xl">
          <FaTree className="text-green-600 text-5xl mx-auto" />
          <h2 className="text-3xl font-bold mt-3">12,345</h2>
          <p className="text-gray-600">Trees Planted</p>
        </Card>
        <Card className="p-6 text-center bg-white shadow-lg rounded-2xl">
          <FaLeaf className="text-green-500 text-5xl mx-auto" />
          <h2 className="text-3xl font-bold mt-3">50,789kg</h2>
          <p className="text-gray-600">CO₂ Saved</p>
        </Card>
        <Card className="p-6 text-center bg-white shadow-lg rounded-2xl">
          <FaUsers className="text-blue-500 text-5xl mx-auto" />
          <h2 className="text-3xl font-bold mt-3">8,420</h2>
          <p className="text-gray-600">Volunteers Joined</p>
        </Card>
      </section>

      {/* 💡 Eco Tips & Challenges */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <Card className="bg-green-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold">🌱 Eco Tip of the Day</h3>
          <p className="mt-2 text-gray-700">Use reusable bags to reduce plastic waste!</p>
        </Card>
        <Card className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold">⚡ Challenge</h3>
          <p className="mt-2 text-gray-700">Plant a tree this weekend and share your progress!</p>
        </Card>
      </section>

      {/* 🎠 Success Stories Carousel */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">🌟 Success Stories</h2>
        <Carousel>
          <div className="p-4 bg-white rounded-xl shadow-md">
            "I planted my first tree and it feels amazing!" – Priya
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md">
            "My kids love learning about nature through this platform!" – Rahul
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md">
            "We organized a beach cleanup and collected 300kg of plastic!" – Community Team
          </div>
        </Carousel>
      </section>

      {/* 📢 Call to Action */}
      <section className="text-center p-8">
        <Button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 font-bold tracking-wide">
          Join the Green Movement 🌿
        </Button>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;

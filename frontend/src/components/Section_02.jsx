import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import '@fontsource/poppins'; // Importing Poppins font

const sections = [
  {
    id: 1,
    title: "Environment Preservation",
    description:
      "Learn about the importance of preserving our environment and the steps we can take to protect it.",
    points: ["Reduce Pollution", "Conserve Resources", "Protect Wildlife", "Promote Sustainability"],
  },
  {
    id: 2,
    title: "Animal and Plant Species",
    description:
      "Discover the diverse species of animals and plants and the importance of biodiversity.",
    points: ["Species Conservation", "Habitat Protection", "Endangered Species", "Biodiversity"],
  },
  {
    id: 3,
    title: "Nature Preservation",
    description:
      "Understand the significance of preserving natural habitats and ecosystems for future generations.",
    points: ["Ecosystem Restoration", "Sustainable Practices", "Community Involvement", "Education"],
  },
  {
    id: 4,
    title: "Sustainability Concerns",
    description:
      "Addressing the key concerns related to sustainability and how we can contribute to a greener planet.",
    points: ["Climate Change", "Renewable Energy", "Waste Management", "Sustainable Living"],
  },
  {
    id: 5,
    title: "Safety Measures",
    description:
      "Ensuring safety measures are in place to protect both people and the environment.",
    points: ["Emergency Preparedness", "Safety Protocols", "Risk Management", "Health & Safety"],
  },
];

export default function InteractiveSection() {
  const [selected, setSelected] = useState(sections[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-10 bg-teal-200 bg-blend-saturation text-gray-900 rounded-2xl shadow-2xl font-poppins">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 flex flex-col gap-5">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 md:p-5 rounded-xl flex items-center justify-between font-semibold text-left transition-all duration-300 shadow-lg text-sm md:text-lg tracking-wide border border-orange-800 hover:shadow-xl hover:bg-orange-800 hover:text-white ${
              selected.id === section.id ? "bg-orange-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={() => setSelected(section)}
          >
            {section.title}
            <div className="flex items-center gap-2">
              {selected.id === section.id && <FaCheckCircle className="text-yellow-500" />}
              <span className="text-gray-900">{index + 1}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-2/3 bg-cyan-600 text-gray-900 p-4 md:p-10 rounded-2xl shadow-2xl border border-green-300"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide text-green-600">
          {selected.title}
        </h1>
        <p className="mt-4 text-gray-700 text-sm md:text-lg leading-relaxed">
          {selected.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 flex items-center gap-3 bg-green-200 text-black px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg text-sm md:text-lg font-medium hover:bg-light-ocean-blue-dark transition-all hover:shadow-xl"
        >
          Explore <FiArrowRight />
        </motion.button>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {selected.points.map((point, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 text-sm md:text-lg"
            >
              <FaCheckCircle className="text-green-400 text-lg md:text-xl" />
              <span className="text-white font-semibold">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveSection from "../components/Section_02"; // Import the Section_Plant component

const PlantTrees = () => {
  return (
    <>
      <Navbar />
      <InteractiveSection /> {/* Include the Section_Plant component */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Plant Trees</h1>
      </div>
      <Footer />
    </>
  );
};

export default PlantTrees;
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReduceCarbonFootprint = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Reduce Carbon Footprint</h1>
        <p className="mt-4 text-gray-700">
          Find out how reduce your carbon footprint and combat climate change.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ReduceCarbonFootprint;
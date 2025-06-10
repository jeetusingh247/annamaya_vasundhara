import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ConserveWater = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Conserve Water</h1>
        <p className="mt-4 text-gray-700">
          Discover ways to conserve water and protect this precious resource.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ConserveWater;
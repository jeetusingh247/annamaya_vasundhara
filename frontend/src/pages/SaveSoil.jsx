import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SaveSoil = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Save Soil</h1>
        <p className="mt-4 text-gray-700">
          Discover the importance of soil conservation and how it supports life on Earth.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SaveSoil;
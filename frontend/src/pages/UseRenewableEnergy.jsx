import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UseRenewableEnergy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Use Renewable Energy</h1>
        <p className="mt-4 text-gray-700">
          Explore the advantages of using renewable energy sources like solar and wind power.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default UseRenewableEnergy;
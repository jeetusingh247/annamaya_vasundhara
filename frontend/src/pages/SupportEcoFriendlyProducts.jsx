import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SupportEcoFriendlyProducts = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Support Eco-friendly Products</h1>
        <p className="mt-4 text-gray-700">
          Learn about eco-friendly products and how they contribute to a sustainable future.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SupportEcoFriendlyProducts;
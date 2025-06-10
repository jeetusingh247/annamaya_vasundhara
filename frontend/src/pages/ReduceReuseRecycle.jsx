import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReduceReuseRecycle = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-green-700">Reduce, Reuse, Recycle</h1>
        <p className="mt-4 text-gray-700">
          Learn the importance of reducing waste, reusing items, and recycling materials.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ReduceReuseRecycle;
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // Import the HeroSection component

const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> {/* Include the HeroSection component */}
      <main className="container mx-auto p-5">
        <h1 className="text-3xl font-bold">About Annamaya Vasundhara</h1>
        <p className="mt-4 text-gray-700">
          Our mission is to create environmental awareness and promote sustainable practices.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;

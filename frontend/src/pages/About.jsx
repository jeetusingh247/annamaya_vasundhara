import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // Import the HeroSection component
import SectionAbout01 from "../components/Section_About_01.jsx"; // Import the SectionAbout01 component
const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> {/* Include the HeroSection component */}
      <main className="container mx-auto p-5">
        <div>
        <SectionAbout01 /> {/* Include the SectionAbout01 component */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

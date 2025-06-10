import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; 
import SectionAbout01 from "../components/Section_About_01.jsx"; 
import Section_02 from '../components/Section_02.jsx';
import FAQSection from '../components/FAQs.jsx';

const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <main className="container mx-auto p-5">
        <div>
        <SectionAbout01 /> 
        </div>
        <div>
        <Section_02 />  
        </div>
        <div>
        <FAQSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

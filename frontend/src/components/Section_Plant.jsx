import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    title: "Plant Trees",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
  },
  {
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    title: "Conserve Water",
    description: "Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum."
  },
  {
    image: "https://images.unsplash.com/photo-1523540496191-e0bec1dc4a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    title: "Reduce, Reuse, Recycle",
    description: "Find your greeny stuff for your room and make it look vibrant and full of life."
  }
];

const Section_Plant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <Box className="flex flex-wrap bg-gradient-to-r from-green-50 via-teal-50 to-green-50 text-black font-sans">
      <Box className="w-full sm:w-6/12 mb-10 flex flex-col justify-center p-10">
        <Typography variant="h1" className="text-4xl lg:text-6xl font-bold text-green-800">
          {slides[currentSlide].title}
        </Typography>
        <Box className="w-20 h-2 bg-green-700 my-4"></Box>
        <Typography variant="body1" className="text-xl mb-10">
          {slides[currentSlide].description}
        </Typography>
        <Button variant="contained" color="success" size="large" className="bg-green-600 hover:bg-green-700 text-white text-2xl font-medium px-4 py-2 rounded shadow">
          Learn More
        </Button>
      </Box>
      <Box className="w-full sm:w-6/12 relative">
        <Carousel selectedItem={currentSlide} showThumbs={false} showStatus={false} showIndicators={false} showArrows={false}>
          {slides.map((slide, index) => (
            <img key={index} src={slide.image} alt={`Slide ${index}`} className="w-full h-48 object-cover sm:h-screen rounded-lg shadow-lg" />
          ))}
        </Carousel>
        <Box className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <Button variant="contained" color="primary" onClick={handlePrev} className="bg-green-600 hover:bg-green-700">
            <ArrowBack />
          </Button>
        </Box>
        <Box className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <Button variant="contained" color="primary" onClick={handleNext} className="bg-green-600 hover:bg-green-700">
            <ArrowForward />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section_Plant;
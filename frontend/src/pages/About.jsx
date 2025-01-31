import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
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

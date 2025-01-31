import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-5 text-center">
        <h1 className="text-4xl font-bold text-green-700">Welcome to Annamaya Vasundhara</h1>
        <p className="mt-4 text-gray-600">Join us in saving Mother Earth.</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;

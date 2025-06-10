import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/Signup"; // Import the SectionAbout01 component
import ReduceReuseRecycle from "./pages/ReduceReuseRecycle"; // Import the new pages
import ConserveWater from "./pages/ConserveWater";
import PlantTrees from "./pages/PlantTree";
import UseRenewableEnergy from "./pages/UseRenewableEnergy";
import ReduceCarbonFootprint from "./pages/ReduceCarbonFootprint";
import SupportEcoFriendlyProducts from "./pages/SupportEcoFriendlyProducts";
import SaveSoil from "./pages/SaveSoil";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reduce-reuse-recycle" element={<ReduceReuseRecycle />} /> {/* Add the new routes */}
        <Route path="/conserve-water" element={<ConserveWater />} />
        <Route path="/plant-trees" element={<PlantTrees />} />
        <Route path="/use-renewable-energy" element={<UseRenewableEnergy />} />
        <Route path="/reduce-carbon-footprint" element={<ReduceCarbonFootprint />} />
        <Route path="/support-eco-friendly-products" element={<SupportEcoFriendlyProducts />} />
        <Route path="/save-soil" element={<SaveSoil />} />
      </Routes>
    </Router>
  );
};

export default App;
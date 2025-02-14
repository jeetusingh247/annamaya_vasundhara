import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/icons/logo.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <img src={logo} alt="Annamaya Vasundhara Logo" className="h-8 w-8 mr-1" />
          Annamaya Vasundhara
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="mx-2 hover:text-teal-200">Home</Link>
          <Link to="/about" className="mx-2 hover:text-teal-200">About</Link>
          <Link to="/dashboard" className="mx-2 hover:text-teal-200">Dashboard</Link>
          <Link to="/login" className="mx-2 flex items-center hover:text-teal-200">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
            Login
          </Link>
          <Link to="/signup" className="mx-2 flex items-center hover:text-teal-200">
            <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
            SignUp
          </Link>
          <Link to="/contact" className="mx-2 flex items-center hover:text-teal-200">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            Contact Us
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <Link to="/" className="block mx-2 my-2 hover:text-teal-200" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block mx-2 my-2 hover:text-teal-200" onClick={toggleMenu}>About</Link>
          <Link to="/dashboard" className="block mx-2 my-2 hover:text-teal-200" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/login" className="block mx-2 my-2 flex items-center hover:text-teal-200" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
            Login
          </Link>
          <Link to="/signup" className="block mx-2 my-2 flex items-center hover:text-teal-200" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
            SignUp
          </Link>
          <Link to="/contact" className="block mx-2 my-2 flex items-center hover:text-teal-200" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
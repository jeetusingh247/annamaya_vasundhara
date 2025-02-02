import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/icons/logo.png'; // Adjust the path to your logo image

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <img src={logo} alt="Annamaya Vasundhara Logo" className="h-8 w-8 mr-1" />
          Annamaya Vasundhara
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/dashboard" className="mx-2">Dashboard</Link>
          <Link to="/login" className="mx-2 flex items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
          </Link>
          <Link to="/signup" className="mx-2 flex items-center">
            <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
            SignUp
          </Link>
          <Link to="/contactus" className="mx-2 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Annamaya Vasundhara</Link>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/about" className="mx-2">About</Link>
          <Link to="/dashboard" className="mx-2">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

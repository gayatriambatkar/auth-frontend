import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Support</h1>
      <div className="flex gap-4">
        <Link to="/register" className="text-white px-4 py-2 rounded-md bg-purple-600 hover:bg-pink-400 transition">
          Register
        </Link>
        <Link to="/login" className="text-white px-4 py-2 rounded-md bg-purple-600 hover:bg-pink-400 transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

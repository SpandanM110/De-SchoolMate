import React from "react";
import { Link } from "react-router-dom";
import "../utils/home.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-5 px-4 z-10 shadow-2xl shadow-pink-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold text-white ml-20">
          <span className="text-orange-500">De </span>School
          <span className="text-orange-500">M</span>ate
        </Link>
        <div className="space-x-10 font-bold text-lg mr-20">
          <Link to="/" className="link-underline text-white">
            Home
          </Link>

          <Link to="/About" className="link-underline text-white">
            About
          </Link>
          <Link to="/orders" className="link-underline text-white">
            Features
          </Link>

          <Link
            to="/app"
            className="rounded-full px-4 py-2 text-black bg-white hover:bg-gray-300"
          >
            Open App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

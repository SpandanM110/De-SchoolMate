import React from "react";
import { NavLink } from "react-router-dom";
import "../utils/home.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-5 px-4 z-10 shadow-2xl shadow-pink-200">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-4xl font-bold text-white ml-20"
          activeClassName="text-orange-500"
        >
          <span className="text-orange-500">De </span>School
          <span className="text-orange-500">M</span>ate
        </NavLink>
        <div className="space-x-10 font-bold text-lg mr-20">
          <NavLink
            exact
            to="/"
            className="link-underline text-white"
            activeClassName="text-orange-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="link-underline text-white"
            activeClassName="text-orange-500"
          >
            About
          </NavLink>

          <NavLink
            to="/features"
            className="link-underline text-white"
            activeClassName="text-orange-500"
          >
            Features
          </NavLink>

          <NavLink
            to="/apps"
            className="rounded-full px-4 py-2 text-black bg-white hover:bg-gray-300"
          >
            Open App
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

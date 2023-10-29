import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black py-8 px-10 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t-2 border-gray-200">
        {/* Navigation Links */}
        <div className="mb-4 mt-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Navigation</h3>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a
                href="/about"
                className="hover:text-gray-800 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-800 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-gray-800 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-gray-800 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6 hover:opacity-75 transition duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 hover:opacity-75 transition duration-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 hover:opacity-75 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

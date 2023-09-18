import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-4 text-black py-8 mt-4">

      {/* Social Media Links */}
      <div className="flex space-x-8">
        <a href="#" className="text-lg">
          <FaFacebook />
        </a>
        <a href="#" className="text-lg">
          <FaInstagram />
        </a>
        <a href="#" className="text-lg">
          <FaTwitter />
        </a>
        <a href="#" className="text-lg">
          <FaYoutube />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <a href="#" className="hover:text-gray-400 text-xs">
          Conditions of Use
        </a>
        <a href="#" className="hover:text-gray-400 text-xs">
          Privacy & Policy
        </a>
        <a href="#" className="hover:text-gray-400 text-xs">
          Press Room
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-1 text-xs">
        © {new Date().getFullYear()} MovieBox by <span className="text-bg">GentTech Soln..</span>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.svg";
import logoText from "../assets/logotext.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav className="w-full p-2 flex justify-between items-center">
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center justify-start gap-x-3 text-white text-md font-semibold"
        >
          <img className="w-8" src={logo} alt="logo" />
          <p>MovieBox</p>
        </a>
      </div>
      <div className="w-1/2 flex justify-between items-center border-white border px-2 rounded-md">
        <input
          type="text"
          placeholder="Search for your movies.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[90%] p2-10 pr-4 py-1 text-xs text-white bg-transparent outline-none focus:outline-none focus:border-none focus:shadow-none border-transparent shadow-none"
        />
        <button
          onClick={handleSearch}
          className="text-white "
        >
          <IoIosSearch className="text-white" />
        </button>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-white mr-4">
         Sign in
        </a>
        <div className="block">
          <div className="hamburger-menu">
            <IoMdMenu className="text-2xl text-red-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

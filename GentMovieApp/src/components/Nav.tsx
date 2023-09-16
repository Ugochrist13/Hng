import React, { useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.svg";

/**
 * Props for the Navbar component.
 */
interface NavbarProps {
  /**
   * Callback function to handle search when the user enters a query.
   * @param query - The search query entered by the user.
   */
  onSearch: (query: string) => void;
}

/**
 * A functional component representing the navigation bar.
 * @param {NavbarProps} props - The properties passed to the component.
 */
const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  // State to store the user's search query
  const [query, setQuery] = useState("");

  /**
   * Handles the search action when the user clicks the search button.
   */
  const handleSearch = () => {
    // Call the provided onSearch callback with the current query
    onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search when Enter key is pressed
    }
  };

  return (
    <nav className="w-full relative p-2 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo and app name */}
        <a
          href="/"
          className="flex items-center justify-start gap-x-3 text-white text-md font-semibold"
        >
          <img className="w-8" src={logo} alt="logo" />
          <p>MovieBox</p>
        </a>
      </div>
      <div className="w-2/3 md:w-1/2 flex justify-between absolute md:static z-40 top-20 right-14 items-center border-white border px-2 rounded-md">
        {/* Search input field */}
        <input
          type="text"
          placeholder="What movie do you want to watch?"
          value={query}
          onKeyPress={handleKeyPress}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[90%] p-2 pl-4 pr-4 py-1 text-xs text-white bg-transparent outline-none focus:outline-none focus:border-none focus:shadow-none border-transparent shadow-none"
        />
        {/* Search button */}
        <button
          onClick={handleSearch}
          className="text-white"
        >
          <IoIosSearch className="text-white" />
        </button>
      </div>
      <div className="flex items-center">
        {/* Sign-in link */}
        <a href="#" className="text-white mr-4">
          Sign in
        </a>
        <div className="block">
          {/* Hamburger menu icon */}
          <div className="hamburger-menu">
            <IoMdMenu className="text-2xl text-white bg-pink-600 rounded-full p-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
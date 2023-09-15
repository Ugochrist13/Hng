import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../assets/logo.svg";
import tv from "../assets/tv.svg";
import Home from "../assets/home.svg";
import logout from "../assets/logout.svg";
import movie from "../assets/movie.svg";
import calender from "../assets/calender.svg";
import "./sidebar.css"; // Import styles
import { Link } from "react-router-dom";

// Define the Sidebar component
const Sidebar = () => {
  // State variables for selected tab and sidebar visibility
  const [userTab, setUserTab] = useState("Home");
  const [userSidebar, setUserSidebar] = useState(false);

  // Load the saved user tab from local storage when the component mounts
  useEffect(() => {
    const savedTab = localStorage.getItem("currentUserTab");
    if (savedTab) {
      setUserTab(savedTab);
    }
  }, []);

  // Handle tab click to update selected tab and hide the sidebar
  const handleTabClick = (tabName: string) => {
    setUserTab(tabName);
    setUserSidebar(false);
    localStorage.setItem("currentUserTab", tabName); // Save the selected tab to local storage
  };

  return (
    <div
      className={`bg-white border rounded-lg border-gray-700 fixed z-20 lg:min-h-screen flex flex-col justify-between md:justify-between md:flex-col lg:justify-start items-center lg:flex-col w-full lg:w-[11%] lg:mr-4`}
    >
      <div className="flex justify-between items-center">
        {/* Logo and toggle button */}
        <Link to="/" className="flex items-center gap-x-2 sidebar-logo p-3">
          <img className="mx-auto w-8" src={logo} alt="Logo" />{" "}
          <p className="text-xs">MovieBox</p>
        </Link>
        <button
          className="lg:hidden text-2xl py-2 text-grayText rounded-md outline-none focus:border-gray-400"
          onClick={() => setUserSidebar(!userSidebar)}
        >
          {userSidebar ? (
            <GrClose className="mr-2" />
          ) : (
            <GiHamburgerMenu className="mr-2" />
          )}
        </button>
      </div>
      <ul
        className={`absolute pl-2  mx-0 left-0 top-[3.4rem] lg:top-0 lg:-mt-1 lg:static ${
          userSidebar
            ? "left-0 w-1/2 md:w-[25%] min-h-screen  lg:w-auto lg:h-auto"
            : "left-[-55rem] min-h-screen lg:h-auto lg:left-0"
        } sidebar-ul mt-12 transition-all duration-1000 ease-in`}
      >
        {/* Home Tab */}
        <li
          className={`text-sm my-5 p-2 text-black ${
            userTab === "Home" ? "active" : ""
          }`}
        >
          <button
            className="flex items-center  space-x-4"
            onClick={() => {
              setUserTab("Home");
              setUserSidebar(false);
            }}
          >
            <span className="icon">
              <img src={Home} alt="" />
            </span>{" "}
            <span className="">Home</span>
          </button>
        </li>

        {/* Movies Tab */}
        <li
          className={`text-sm my-5 p-2  text-black ${
            userTab === "Movies" ? "active" : ""
          }`}
        >
          <button
            className="flex items-center space-x-4 "
            onClick={() => {
              handleTabClick("Movies");
            }}
          >
            <span className="icon">
              <img src={movie} alt="" />
            </span>{" "}
            <span>Movies</span>
          </button>
        </li>

        {/* Tv Series Tab */}
        <li
          className={`text-sm my-5 p-2 text-black ${
            userTab === "TvSeries" ? "active" : ""
          }`}
        >
          <button
            className="flex items-center space-x-4"
            onClick={() => {
              handleTabClick("TvSeries");
            }}
          >
            <span className="icon">
              <img src={tv} alt="" />
            </span>{" "}
            <span>Tv Series</span>
          </button>
        </li>

        {/* Upcoming Tab */}
        <li
          className={`text-sm my-5 p-2 text-black ${
            userTab === "Upcoming" ? "active" : ""
          }`}
        >
          <button
            className="flex items-center space-x-4"
            onClick={() => {
              handleTabClick("Upcoming");
            }}
          >
            <span className="icon">
              <img src={calender} alt="" />
            </span>{" "}
            <span>Upcoming</span>
          </button>
        </li>

        {/* Mobile App Image */}
        <li className="mobile-app-image pt-2 p-2">
          <>
            <div className="border border-pink-200 p-3 w-3full mx-auto rounded-lg">
              <p className="text-sm font-medium py-2">
                Play movie quizes and earn movie tickets
              </p>

              <p
                style={{ fontSize: "10px" }}
                className="w-full text-gray-400 mb-3"
              >
                50k are playing right now
              </p>
              <button className="py-1 bg-pink-100 px-3 rounded-xl mx-auto text-center text-pink-400 text-xs">
                Start Playing
              </button>
            </div>
          </>
        </li>

        {/* Logout Button */}
        <li className="text-sm mb-5 p-3 z-10 text-black">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="flex items-center gap-2 py-2"
          >
            <span className="icon">
              <img src={logout} alt="" />
            </span>{" "}
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

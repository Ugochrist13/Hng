import React, { useState, useEffect } from "react";
import { fetchTopMovies, searchMovies } from "../services/Api"; // Import API functions
import MovieList from "../components/MovieLists";
import MovieData from "../components/MovieData";
import Navbar from "../components/Nav";
import { useTransition, animated, Transition } from "react-spring";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import imdb from "../assets/IMDB.svg";
import tomato from "../assets/tomato.svg";
import save from "../assets/save.svg";
import circle from "../assets/circle.svg";

// Define the Home component
const Home: React.FC = () => {
  // State variables for movies and loading status
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0); // Index for rotating movies
  const backdropBaseUrl = "https://image.tmdb.org/t/p/original"; // Base URL for movie backdrops

  // Fetch top movies from the API and start the rotation
  useEffect(() => {
    async function fetchMovies() {
      try {
        const topMovies = await fetchTopMovies();
        console.log(topMovies);
        setMovies(topMovies);
        startRotation(topMovies.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    }
    fetchMovies();
  }, []);

  // Function to start rotating movies at a fixed interval
  const startRotation = (numMovies: number) => {
    if (numMovies > 0) {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % numMovies);
      }, 15000); // Rotate every 15 seconds

      return () => {
        clearInterval(intervalId);
      };
    }
  };

  // Animation transitions for movie details
  const transitions = useTransition(movies[index], {
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
  });

  // Function to handle movie search
  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="w-full h-screen">
        {transitions((props, item) => (
          <animated.div
            key={item?.id}
            style={{
              ...props,
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(59, 67, 50, 0.5),
                rgba(52, 73, 3, 0.3)
              ), url(${backdropBaseUrl}${item?.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full text-left h-[95%] flex flex-col justify-between px-8"
          >
            {/* Render the Navbar component with the search callback */}
            <Navbar onSearch={handleSearch} />

            <div className="md:w-96 mb-10">
              <h1 className="text-3xl font-bold mb-4 text-white">
                {item?.title}
              </h1>
              <div className="flex gap-x-8 items-center text-white justify-start mb-3">
                <p className="flex items-center justify-start gap-x-2 text-xs font-light">
                  <img src={imdb} alt="" />
                  <span>86.0 / 100</span>
                </p>
                <p className="flex items-center justify-start gap-x-2 text-xs font-light">
                  <img src={tomato} alt="" />
                  <span>97%</span>
                </p>
              </div>
              <p
                style={{ fontSize: "14px" }}
                className="w-full text-justify font-medium mb-8 text-white"
              >
                {item?.overview}
              </p>
              <Link
                to={`https://www.themoviedb.org/movie/${item?.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 flex relative items-center justify-center gap-x-1 text-white hover:text-hover bg-bg rounded-lg p-1 text-md"
              >
                <img className="absolute w-7 left-[34px]" src={save} alt="" />
                <img className="w-[36px]" src={circle} alt="" />
                <p className="text-white">Watch Trailer</p>
              </Link>
            </div>
          </animated.div>
        ))}
      </div>

      {/* Featured Movies section */}
      <div className="w-full flex justify-between items-center mb-4 px-4">
        <h1 className="font-bold">Featured Movies</h1>
        <p className="text-bg font-semibold">See more ..</p>
      </div>

      {/* Render the MovieList component with movies */}
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { fetchTopMovies, searchMovies } from "../services/Api"; // Import API functions
import MovieList from "../components/MovieLists";
import MovieData from "../components/MovieData";
import Navbar from "../components/Nav";
import { useTransition, animated, Transition } from "react-spring";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const backdropBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const topMovies = await fetchTopMovies();
        console.log(topMovies);
        setMovies(topMovies);
        startRotation(topMovies.length);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    }
    fetchMovies();
  }, []);

  const startRotation = (numMovies: number) => {
    if (numMovies > 0) {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % numMovies);
      }, 15000);

      return () => {
        clearInterval(intervalId);
      };
    }
  };

  const transitions = useTransition(movies[index], {
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
  });

  useEffect(() => {
    async function fetchMovies() {
      try {
        const topMovies = await fetchTopMovies();
        setMovies(topMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    }
    fetchMovies();
  }, []);

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
              rgba(59, 67, 50, 0.4),
              rgba(52, 73, 3, 0.079)
            ), url(${backdropBaseUrl}${item?.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full text-left h-[95%] flex flex-col justify-between px-8"
          >
            <Navbar onSearch={handleSearch} />
            <div className="md:w-96 mb-10">
              <h1 className="text-3xl font-bold mb-4 text-primary">
                {item?.title}
              </h1>
              <p
                style={{ fontSize: "14px" }}
                className="w-full text-justify font-medium mb-8 text-red-400"
              >
                {item?.overview}
              </p>
              <Link
                to={`https://www.themoviedb.org/movie/${item?.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-hover bg-white rounded-lg py-2 px-3 text-md"
              >
                Learn More
              </Link>
            </div>
          </animated.div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center mb-4 px-4">
        {" "}
        <h1 className="font-bold">Featured Movies</h1>
        <p className="text-primary font-semibold">See more ..</p>
      </div>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;

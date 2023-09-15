import React, { useState, useEffect } from "react";
import { useTransition, animated, Transition } from "react-spring";
import { fetchTopMovies } from "../services/Api";
import Navbar from "./Nav";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string | null;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
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
      }, 10000);

      return () => {
        clearInterval(intervalId);
      };
    }
  };

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const transitions = useTransition(movies[index], {
    from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, -20px, 0)" },
  });

  return (
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
  );
};

export default HeroSection;

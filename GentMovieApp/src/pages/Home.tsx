import React, { useState, useEffect } from "react";
import { fetchTopMovies, searchMovies } from "../services/Api"; // Import API functions
import MovieList from "../components/MovieLists";
import MovieData from "../components/MovieData";
import HeroSection from "../components/Hero";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(true);

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
      <HeroSection onSearch={handleSearch} />
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

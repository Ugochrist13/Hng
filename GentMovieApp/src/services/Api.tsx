// services/api.ts
import axios from "axios";

// Get the API key from environment variables using Vite's import.meta.env
const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

// Create an instance of axios for making TMDB API requests
const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});

/**
 * Fetch the top-rated movies from the TMDB API.
 * @returns {Promise<Object[]>} An array of top-rated movies.
 * @throws {Error} If the API request fails.
 */
export const fetchTopMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/top_rated", {
      params: {
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch top movies");
  }
};

/**
 * Search for movies on TMDB based on a query string.
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} An array of search results.
 * @throws {Error} If the API request fails.
 */
export const searchMovies = async (query: string) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: {
        query,
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to search movies");
  }
};

/**
 * Fetch details of a specific movie using its ID.
 * @param {number} movieId - The ID of the movie.
 * @returns {Promise<Object>} Details of the specified movie.
 * @throws {Error} If the API request fails.
 */
export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};
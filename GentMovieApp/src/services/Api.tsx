// services/api.ts
import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});


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

// Add more API functions as needed for your project

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

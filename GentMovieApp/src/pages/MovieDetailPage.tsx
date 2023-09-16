import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/Api'; // Import the API function
import MovieDetail from '../components/MovieDetail';
import MovieData from '../components/MovieData';

// Define the MovieDetailPage component
const MovieDetailPage: React.FC = () => {
  // Get the movie ID from the URL parameter using useParams
  const { id } = useParams<{ id: string }>();

  // State variable to hold movie details
  const [movie, setMovie] = useState<MovieData | null>(null);

  // Fetch movie details from the API when the component mounts
  useEffect(() => {
    async function fetchMovie() {
      try {
        // Fetch movie details based on the provided ID
        const movieData = await fetchMovieDetails(Number(id));
        console.log(movieData);
        // Update the state with the fetched movie data
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    // Call the fetchMovie function
    fetchMovie();
  }, [id]);

  return (
    <div className="movie-detail-page">
      {movie ? (
        // Render the MovieDetail component with movie details
        <MovieDetail
          backdrop_path={movie.backdrop_path}
          title={movie.title}
          release_date={movie.release_date}
          runtime={movie.runtime || 0}
          overview={movie.overview || 'No overview available'}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
          genres={movie.genres}
        />
      ) : (
        // Display a loading message while fetching data
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;

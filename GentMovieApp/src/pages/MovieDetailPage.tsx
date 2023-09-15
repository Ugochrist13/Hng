import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/Api'; // Import the API function
import MovieDetail from '../components/MovieDetail';
import MovieData from '../components/MovieData';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieData = await fetchMovieDetails(Number(id));
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovie();
  }, [id]);

  return (
    <div className="movie-detail-page">
      {movie ? (
       <MovieDetail
       backdrop_path={movie.backdrop_path}
       title={movie.title}
       release_date={movie.release_date}
       runtime={movie.runtime || 0} 
       overview={movie.overview || 'No overview available'} 
     />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;

import React from "react";
import MovieCard from "./MovieCards";
import MovieData from "./MovieData";

/**
 * Props for the MovieList component.
 */
interface MovieListProps {
  /**
   * An array of movie data objects to be displayed in the list.
   */
  movies: MovieData[];
}

/**
 * A functional component representing a list of movies.
 * @param {MovieListProps} props - The properties passed to the component.
 */
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-4 p-4">
      {movies?.map((movie) => (
        <MovieCard
          key={movie.id} // Unique key for each movie card
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
          genres={movie.genres}
        />
      ))}
    </div>
  );
};

export default MovieList;

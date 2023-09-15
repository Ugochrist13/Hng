import React, { useEffect } from "react";
import MovieCard from "./MovieCards";
import MovieData from "./MovieData";
interface MovieListProps extends Partial<MovieData> {
  movies: MovieData[];
}


const MovieList: React.FC<MovieListProps> = ({ movies }) => {

  return (
    <div className="flex flex-wrap items-center justify-around gap-4 p-4">
      {movies?.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default MovieList;

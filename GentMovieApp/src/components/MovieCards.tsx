import React from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  release_date,
  poster_path,
}) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w400";


  const divStyle = {
    backgroundImage: `url(${posterBaseUrl}${poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link
      to={`/movies/${id}`}
      className="w-72 cursor-pointer transition-transform transform hover:scale-105 mb-6"
    >
      <div style={divStyle} className="w-full">
        <img
          src={`${posterBaseUrl}${poster_path}`}
          className="w-full h-[370px]" 
          alt={title}
          data-testid="movie-poster"
        />
      </div>
      <h2 className="text-primary hover:text-hover mt-1" data-testid="movie-title">
        {title}
      </h2>
      <p data-testid="movie-release-date" className="text-primary hover:text-hover text-sm">({release_date})</p>
    </Link>
  );
};

export default MovieCard;

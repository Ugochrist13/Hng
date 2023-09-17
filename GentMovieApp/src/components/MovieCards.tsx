import React from "react";
import { Link } from "react-router-dom";
import imdb from "../assets/IMDB.svg";
import tomato from "../assets/tomato.svg";

interface MovieCardProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genres: { id: number; name: string }[];
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  release_date,
  poster_path,
  genres,
}) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w400";

  const divStyle = {
    backgroundImage: `url(${posterBaseUrl}${poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link
      to={`/movies/${id}`} data-testid="movie-card"
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
      <p
        data-testid="movie-release-date"
        className="text-gray-700 hover:text-hover text-sm"
      >
        {release_date}
      </p>
      <h2
        className="text-black hover:text-hover mt-1 mb-2"
        data-testid="movie-title"
      >
        {title}
      </h2>
      <div className="flex gap-x-8 items-center text-black justify-start mb-3">
        <p className="flex items-center justify-start gap-x-2 text-xs font-light">
          <img src={imdb} alt="" />
          <span>86.0 / 100</span>
        </p>
        <p className="flex items-center justify-start gap-x-2 text-xs font-light">
          <img src={tomato} alt="" />
          <span>97%</span>
        </p>
        <div className="flex justify-start gap-x-2 items-center py-2">
          {genres?.map((genre, id) => (
            <div key={id} className="text-black">
              {genre?.name}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

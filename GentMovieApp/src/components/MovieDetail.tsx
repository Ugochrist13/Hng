import React from "react";

interface MovieDetailProps {
  title: string;
  release_date: string;
  runtime: number;
  overview: string;
  backdrop_path: string;
}

const MovieDetail: React.FC<MovieDetailProps> = ({
  title,
  release_date,
  runtime,
  overview,
  backdrop_path,
}) => {
  
  const backdropBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="w-full h-screen p-2" data-testid="movie-detail">
      <div
        style={{
          backgroundImage: `linear-gradient(
        to bottom,
        rgba(59, 67, 50, 0.4),
        rgba(52, 73, 3, 0.079)
      ), url(${backdropBaseUrl}${backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[80%]"
      ></div>
      <div className="w-full flex justify-center items-center gap-x-20 mt-2">
        <h2 data-testid="movie-title" className="text-primary hover:text-hover">{title}</h2>
        <p data-testid="movie-release-date" className="text-primary hover:text-hover" >{release_date}</p>
        <p data-testid="movie-runtime" className="text-primary hover:text-hover" >{`${runtime} minutes`}</p>
      </div>
      <p data-testid="movie-overview" className="p-4 text-sm font-semibold text-justify text "> <span className="text-primary">Overview:</span> {overview}</p>
    </div>
  );
};

export default MovieDetail;

import React from "react";
import Sidebar from "./Sidebar";
import star from "../assets/star.svg";
import divimg from "../assets/divimg.svg";
import ticket from "../assets/ticket.svg";
import list from "../assets/list.svg";

/**
 * Props for the MovieDetail component.
 */
interface MovieDetailProps {
  /**
   * The title of the movie.
   */
  title: string;

  /**
   * The release date of the movie.
   */
  release_date: string;

  /**
   * The runtime of the movie in minutes.
   */
  runtime: number;

  /**
   * A brief overview of the movie.
   */
  overview: string;

  /**
   * The backdrop path for the movie image.
   */
  backdrop_path: string;
}

/**
 * A functional component representing the details of a movie.
 * @param {MovieDetailProps} props - The properties passed to the component.
 */
const MovieDetail: React.FC<MovieDetailProps> = ({
  title,
  release_date,
  runtime,
  overview,
  backdrop_path,
}) => {
  // Base URL for movie backdrop images
  const backdropBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className="w-full flex items-center justify-between h-screen py-2"
      data-testid="movie-detail"
    >
      <div className="h-screen fixed">
        <Sidebar />
      </div>
      <div className="md:w-[90%] h-screen md:ml-36">
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
        <div className="w-full flex justify-between items-center mt-4 my-4 px-4">
          <div className="flex justify-start gap-x-8 items-center">
            <div className="flex justify-start items-center">
              <h2
                data-testid="movie-title"
                className="text-black hover:text-hover text-2xl"
              >
                {`${title} .`}
              </h2>
              <p
                data-testid="movie-release-date"
                className="text-black hover:text-hover text-2xl"
              >
                {`${release_date} .`}
              </p>
              <p
                data-testid="movie-runtime"
                className="text-black hover:text-hover text-2xl"
              >{`${runtime} mins`}</p>
            </div>
            <div className="text-bg">Hello</div>{" "}
            <div className="text-bg">How far</div>
          </div>
          <div className="flex justify-end items-center gap-x-3">
            <img className="w-7" src={star} alt="" />
            <p>8.5 | 350k</p>
          </div>
        </div>
        <div className="flex w-full p-2">
          <div className="w-3/5">
            <p
              data-testid="movie-overview"
              className="p-4 text-lg text-justify mb-3"
            >
              {overview}
            </p>
            <p className="px-4 text-lg text-justify mb-3">
              Director : <span className="text-bg">Joseph Kosinski </span>
            </p>
            <p className="px-4 text-lg text-justify mb-3">
              Writers :{" "}
              <span className="text-bg">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p className="px-4 text-lg text-justify mb-3">
              Stars :{" "}
              <span className="text-bg">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
          </div>
          <div className="w-2/5">
            <div className="w-full flex items-center justify-center rounded-lg bg-bg py-4 gap-x-2 mb-2">
              <div>
                <img src={ticket} alt="" />
              </div>
              <p className="text-white text-lg">See Showtimes</p>
            </div>
            <div className="w-full flex items-center justify-center rounded-lg border border-bg py-4 gap-x-2 mb-6">
              <div>
                <img src={list} alt="" />
              </div>
              <p className="text-black text-xl">More watch options</p>
            </div>
            <div className="full">
              <img className="full" src={divimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

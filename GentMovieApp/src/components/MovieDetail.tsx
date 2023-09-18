import React from "react";
import Sidebar from "./Sidebar";
import star from "../assets/star.svg";
import divimg from "../assets/divimg.svg";
import ticket from "../assets/ticket.svg";
import list from "../assets/list.svg";
import list2 from "../assets/list2.svg";
import save from "../assets/save.svg";
import circle from "../assets/circle.svg";
import arrow from "../assets/arrow.svg";

/**
 * Props for the MovieDetail component.
 */
interface MovieDetailProps {
  title: string;
  release_date: string;
  runtime: number;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
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
  vote_average,
  vote_count,
  genres,
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
          className="w-full flex justify-center items-center h-[80%]"
        >
          <div className="flex relative flex-col items-center justify-center gap-1 p-2">
            <img className="absolute w-8 top-6" src={save} alt="" />
            <img className="w-[60px]" src={circle} alt="" />
            <p className="text-white">Watch Trailer</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row  justify-between items-center mt-4 my-4 px-4">
          <div className="flex flex-col md:flex-row justify-start gap-x-8 items-center">
            <div className="flex justify-start flex-col md:flex-row items-center">
              <h2
                data-testid="movie-title"
                className="text-black hover:text-hover text-2xl"
              >
                {title}
              </h2>
              <p
                data-testid="movie-release-date"
                className="text-black hover:text-hover text-2xl"
              >
                {`. ${release_date}`}
              </p>
              <p
                data-testid="movie-runtime"
                className="text-black hover:text-hover text-2xl"
              >{`. ${runtime}`}</p>
            </div>
            <div className="flex justify-start gap-x-2 items-center">
              {genres?.map((genre, id) => (
                <div key={id} className="text-bg">
                  {genre?.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-3">
            <img className="w-7" src={star} alt="" />
            <p className="text-black">
              {vote_average} | {vote_count}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full p-2">
          <div className="w-full md:w-3/5">
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
            <div className="flex mt-6">
              <div className="w-1/2 flex items-center justify-center rounded-lg border bg-bg py-4 gap-x-2 mb-6">
                <p className="text-white text-xl">Top rated movie #65</p>
              </div>
              <div className="w-2/3 flex items-center justify-between rounded-lg border border-bg py-4 px-4 mb-6">
                <p className="text-black text-xl">Awards 9 nominations</p>
                <div>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5">
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
            <div className="w-full relative">
              <img className="w-full" src={divimg} alt="" />
              <div className="w-full absolute flex bottom-[-25px] items-center justify-center rounded-lg border border-white py-3 gap-x-2 mb-6">
                <div>
                  <img src={list2} alt="" />
                </div>
                <p className="text-white text-xl">
                  The Best Movies and Shows in September
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

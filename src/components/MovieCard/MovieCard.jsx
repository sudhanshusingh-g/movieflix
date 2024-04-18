import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      }}
      className="duration-300 text-sm w-44 h-56  flex items-end justify-center rounded hover:scale-110 cursor-pointer bg-cover bg-center bg-no-repeat"
    >
      <span className=" rounded-b text-sm p-4 text-white font-bold bg-slate-900 bg-opacity-45 w-full text-center">
        {movie.title}
      </span>
    </div>
  );
}

export default MovieCard;

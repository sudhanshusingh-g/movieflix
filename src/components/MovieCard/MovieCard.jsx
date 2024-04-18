import React, { useState } from "react";
import { MdBookmarkRemove, MdBookmarkAdded } from "react-icons/md";

function MovieCard({ movie,addToWatchList,removeFromWatchList,watchList }) {
  
  const [hovered, setHovered] = useState("");
  // Hovering on movie cards
  const showButton = (id) => {
    setHovered(id); // 2
  };

  const hideButton = () => {
    setHovered("");
  };

  return (
    <div
      onMouseOver={() => showButton(movie.id)}
      onMouseLeave={() => hideButton()}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      }}
      className="duration-300 text-sm w-44 h-56  flex items-end justify-center rounded hover:scale-110 cursor-pointer bg-cover bg-center bg-no-repeat relative"
    >
      <div
        className="text-2xl p-1 bg-gray-100 bg-opacity-40 rounded-2xl absolute right-2 top-2"
        style={{ display: hovered === movie.id ? "block" : "none" }}
      >
        {watchList.includes(movie) === false ? (
          <div onClick={() => addToWatchList(movie)}>
            {" "}
            <MdBookmarkAdded color="#FAE896" />{" "}
          </div>
        ) : (
          <div onClick={() => removeFromWatchList(movie)}>
            <MdBookmarkRemove color="#F0F0F0" />
          </div>
        )}
      </div>

      <span className=" rounded-b text-sm p-4 text-white font-bold bg-slate-900 bg-opacity-45 w-full text-center">
        {movie.title}
      </span>
    </div>
  );
}

export default MovieCard;

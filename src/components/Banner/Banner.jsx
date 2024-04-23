import React, { useState, useEffect } from "react";

function Banner({ movies }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds, adjust as needed

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div className="h-[40vh] md:h-[70vh] flex items-end bg-cover bg-center bg-no-repeat relative">
      {movies.length > 0 && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original${movies[currentMovieIndex].backdrop_path}`}
            alt={movies[currentMovieIndex].title}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: 1 }}
          />
          <span className="rounded-b text-sm p-4 text-white font-bold bg-slate-900 bg-opacity-45 w-full text-center absolute">
            {movies[currentMovieIndex].title}
          </span>
        </>
      )}
    </div>
  );
}

export default Banner;

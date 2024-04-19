import React, { useEffect, useState } from "react";

function WatchList() {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("favouriteList");
    if (storedList) {
      setFavouriteList(JSON.parse(storedList));
    }
  }, []);
  return (
    <div className="my-2 p-4">
      <h1 className="px-4 flex gap-1 font-bold text-2xl items-center">
        <span className="bg-slate-500 w-[0.2rem] h-[32px]"></span>WatchList
      </h1>
      <table className="shadow-md w-full mt-4">
        <thead className="border-b text-left">
          <tr className="">
            <th className="w-2/3 p-2">Name</th>
            <th className="pl-2">Rating</th>
            <th className="pl-2">Popularity</th>
            <th className="pl-2">Genre</th>
          </tr>
        </thead>
        <tbody className="">
          {favouriteList.map((movie, index) => (
            <tr key={index} className="w-2/3 p-2">
              <td className="p-2 flex items-center gap-3 ">
                <img
                  className="w-12 rounded-sm"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                {movie.title}
              </td>
              <td className="p-2">{movie.vote_average}</td>
              <td className="p-2">{movie.vote_count}</td>
              <td className="p-2">{movie.genre_ids}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;

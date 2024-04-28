import React, { useEffect, useState } from "react";
import { genre_id } from "../../utils/genres";
import { useNavigate } from "react-router-dom";
function WatchList() {
  const [favouriteList, setFavouriteList] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    const storedList = localStorage.getItem("favouriteList");
    if (storedList) {
      setFavouriteList(JSON.parse(storedList));
    }
  }, []);

  const getGenres = (genreIDs) => {
    return genre_id[genreIDs[0]];
  };

  const filterByGenre = (genre) => {
    setCurrentGenre(genre);
    const filteredList = JSON.parse(
      localStorage.getItem("favouriteList")
    ).filter((movie) => {
      return movie.genre_ids.includes(parseInt(genre));
    });
    setFavouriteList(filteredList);
  };

  useEffect(() => {
    if (!currentGenre) {
      const storedList = localStorage.getItem("favouriteList");
      if (storedList) {
        setFavouriteList(JSON.parse(storedList));
      }
    }
  }, [currentGenre]);

  const navigateToMovies=()=>{
    navigate("/movieflix");
  }
  return (
    <div className="my-2 p-4">
      <h1 className="px-4 flex gap-1 font-bold text-2xl items-center">
        <span className="bg-slate-500 w-[0.2rem] h-[32px]"></span>WatchList
      </h1>
      {favouriteList.length === 0 ? (
        <div className="h-[70vh] flex gap-2 flex-col justify-center items-center">
          <p className="">
            No movies in the watchlist
          </p>
          <div className="cursor-pointer p-2 bg-black text-white rounded" onClick={navigateToMovies}>Back to Movies</div>
        </div>
      ) : (
        <>
          <div className="text-right p-2">
            <select
              name="genre"
              id="genre"
              className="border-2 rounded-sm outline-none p-2"
              value={currentGenre}
              onChange={(e) => filterByGenre(e.target.value)}
            >
              <option value="" selected>
                All
              </option>
              {Object.keys(genre_id).map((genre) => (
                <option key={genre} value={genre}>
                  {genre_id[genre]}
                </option>
              ))}
            </select>
          </div>
          <table className="shadow-md border rounded w-full mt-4">
            <thead className=" text-left bg-slate-100">
              <tr className="">
                <th className="w-2/3 p-2">Name</th>
                <th className="pl-2">Rating</th>
                <th className="pl-2">Popularity</th>
                <th className="pl-2">Genres</th>
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
                  <td className="p-2">{getGenres(movie.genre_ids)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default WatchList;

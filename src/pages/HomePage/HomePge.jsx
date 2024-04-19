import React, { useEffect,useState } from "react";
import Banner from "../../components/Banner/Banner";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
function HomePge() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    function apiCall() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    }

    apiCall();
  }, [currentPage]);

  useEffect(() => {
    const storedList = localStorage.getItem("favouriteList");
    if (storedList) {
      setWatchList(JSON.parse(storedList));
    }
  }, []);

  const removeFromWatchList = (movieId) => {
    const updatedList = watchList.filter((item) => item.id !== movieId);
    setWatchList(updatedList);
    localStorage.setItem("favouriteList", JSON.stringify(updatedList));
  };

  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem("favouriteList",JSON.stringify(newWatchList));
  };


  

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(movies);
  return (
    <div>
      <Banner />
      <section className="my-8">
        <h1 className="px-4 flex gap-1 font-bold text-2xl items-center">
          <span className="bg-slate-500 w-[0.2rem] h-[32px]"></span>Top Picks
        </h1>
        <div className="p-4 flex flex-wrap gap-4 justify-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
              watchList={watchList}
            />
          ))}
        </div>
      </section>
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default HomePge;

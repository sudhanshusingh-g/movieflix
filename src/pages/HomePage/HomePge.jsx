import React, { useEffect,useState } from "react";
import Banner from "../../components/Banner/Banner";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";
function HomePge() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    function apiCall() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    }

    apiCall();
  }, []);

  return (
    <div>
      <Banner />
      <section className="my-8">
        <h1 className="px-4 flex gap-1 font-bold text-2xl items-center">
          <span className="bg-slate-500 w-[0.2rem] h-[32px]"></span>Top Picks
        </h1>
        <div className="p-4 flex flex-wrap gap-4 justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePge;

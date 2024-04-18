import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="flex border items-center gap-4">
      <img src="/images/movielogo.jpg" alt="movie-logo" className="w-[8rem]" />
      <Link to="/">
        <p className="px-4 py-1 font-bold cursor-pointer rounded ">Movies</p>
      </Link>
      <Link to="/watchlist">
        <p className="px-4 py-1 font-bold cursor-pointer">Watch Later</p>
      </Link>
    </div>
  );
}

export default Navbar
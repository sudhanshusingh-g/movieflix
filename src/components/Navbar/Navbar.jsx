import React from 'react'
function Navbar() {
  return (
    <div className="flex border items-center gap-4">
      <img src="/images/movielogo.jpg" alt="movie-logo" className="w-[8rem]" />
      <p className="px-4 py-1 font-bold cursor-pointer rounded bg-slate-200">Movies</p>
      <p className="px-4 py-1 font-bold cursor-pointer">Watch Later</p>
    </div>
  );
}

export default Navbar
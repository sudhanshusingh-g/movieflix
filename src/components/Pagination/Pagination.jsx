import React from 'react'
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

function Pagination({nextPage,previousPage,currentPage}) {
  return (
    <section className="flex items-center justify-center gap-2 p-4">
      <div >
        <IoArrowBackCircle size={"1.8rem"} cursor={"pointer"} onClick={previousPage} />
      </div>
      <div>{currentPage}</div>
      <div>
        <IoArrowForwardCircle size={"1.8rem"} cursor={"pointer"} onClick={nextPage} />
      </div>
    </section>
  );
}

export default Pagination
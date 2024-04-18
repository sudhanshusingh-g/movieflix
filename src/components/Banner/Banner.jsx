import React from 'react'

function Banner() {
  return (
    <div className='h-[40vh] md:h-[70vh] flex items-end bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage:
          "url(/images/banner.jpg)",
      }}
    >
      <span className='w-full p-2 font-bold bg-slate-100 bg-opacity-70 text-center text-2xl'>Deadpool</span>
    </div>
  );
}

export default Banner
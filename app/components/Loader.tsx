"use client";

import './loader.css'

const Loader = () => {
  return (
    <div className='h-[70vh] flex justify-center items-center'>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loader;

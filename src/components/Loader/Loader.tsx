// Loader.js
import React from 'react';

const Loader = () => (
  <div className='flex justify-center items-center h-full w-full'>
    <div className='w-11 aspect-square border-8 border-t-8 border-gray-300 border-t-white rounded-full animate-spin'></div>
  </div>
);

export default Loader;

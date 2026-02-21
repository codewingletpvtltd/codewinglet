// Loader.js
import React from 'react';

const Loader = () => (
  <div className='flex justify-center items-center h-full w-full'>
    <div className='w-11 aspect-square border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin' role='img' aria-label='Loading'></div>
  </div>
);

export default Loader;

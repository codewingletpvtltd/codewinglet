import React from 'react';

const NoBlogFound = ({ text = 'No blogs available.' }) => (
  <div className='h-screen w-full bg-white text-black flex justify-center m-8'>
    <p className='text-black'>{text}</p>
  </div>
);

export default NoBlogFound;

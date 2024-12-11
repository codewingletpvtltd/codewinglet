'use client';
import Link from 'next/link';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className='h-screen flex flex-col items-center justify-center min-h-screen bg-white text-center'>
      <div className='flex items-center space-x-2'></div>
      <p className='text-lg text-gray-600 mb-6'>Oops! Something Went Wrong.</p>
      <Link
        href='/'
        className='px-6 py-3 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition duration-300'
      >
        Return Home
      </Link>
    </div>
  );
}

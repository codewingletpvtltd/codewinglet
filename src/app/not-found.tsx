import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center min-h-screen bg-white text-center'>
      <div className='flex items-center space-x-2'>
        <h1 className='text-8xl font-extrabold text-blue-600 animate-bounce'>
          404
        </h1>
      </div>
      <h2 className='text-4xl font-bold text-gray-800 mb-4'>Page Not Found</h2>
      <p className='text-lg text-gray-600 mb-6'>
        Oops! We couldn't find the page you're looking for.
      </p>
      <Link
        href='/'
        className='px-6 py-3 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition duration-300'
      >
        Return Home
      </Link>
    </div>
  );
}

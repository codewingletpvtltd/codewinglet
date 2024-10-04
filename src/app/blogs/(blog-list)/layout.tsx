import { Suspense } from 'react';

import { BlogCategory, BlogSearch } from '@codewinglet/components';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white'>
      <Suspense fallback={<div>Loading search...</div>}>
        <BlogSearch />
      </Suspense>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 2xl:gap-[55px] gap-[30px] mt-[86px]'>
        <div className='flex pt-32'>
          <Suspense fallback={<div>Loading filter...</div>}>
            <BlogCategory />
          </Suspense>
          {children}
        </div>
      </div>
    </div>
  );
}

import { Suspense } from 'react';

import { BlogSearch } from '@codewinglet/components';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white'>
      <Suspense fallback={<div>Loading search...</div>}>
        <BlogSearch />
      </Suspense>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 2xl:gap-[55px] gap-[30px] mt-[86px]'>
        <div className='flex justify-center lg:pt-[120px] pt-[100px]'>
          <Suspense fallback={<div>Loading filter...</div>}>
            {/* <div className='lg:block hidden'>
              <BlogCategory />
            </div> */}
          </Suspense>
          {children}
        </div>
      </div>
    </div>
  );
}

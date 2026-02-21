'use client';

import { useEffect, useState } from 'react';

import { SectionHeader } from '@codewinglet/components';
import { LoaderIcon } from '@codewinglet/assets';

import JobOpening from './components/JobOpening';

const EMBED_CONTAINER_ID = 'khembedjobs';
const LOAD_TIMEOUT_MS = 15000;

const CurrentOpenings = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = document.getElementById(EMBED_CONTAINER_ID);
    if (!container) return;

    const stopLoading = () => setIsLoading(false);

    if (container.children.length > 0) {
      stopLoading();
      return;
    }

    const observer = new MutationObserver(() => {
      if (container.children.length > 0) stopLoading();
    });
    observer.observe(container, { childList: true, subtree: true });

    const timeoutId = window.setTimeout(stopLoading, LOAD_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div
        className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-32 !pb-[120px]'
        id='jobs'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <SectionHeader
            title={<>Current job openings</>}
            description='Discover Your Next Career Opportunity: Explore Our Latest Job Openings.'
            headingClassName='md:text-left text-center lg:text-h2'
            descriptionClassName='text-gray-400 md:text-left text-center md:text-subtitle2Light'
          />

          <div className='md:mt-[86px] mt-[78px] relative min-h-[200px]'>
            {isLoading && (
              <div className='absolute inset-0 z-10 flex items-center justify-center bg-white'>
                <LoaderIcon className='animate-spin origin-center' />
              </div>
            )}
            <JobOpening />
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentOpenings;

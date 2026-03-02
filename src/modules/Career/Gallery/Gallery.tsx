'use client';

import Image from 'next/image';

import { SectionHeader } from '@codewinglet/components';

import galleryPhotos from '../WorkLife/galleryPhotos';

/**
 * Repeats the photo array to fill the masonry gallery while keeping
 * natural aspect ratios for a Pinterest-style layout.
 */

export default function Gallery() {
  return (
    <div className='bg-white lg:py-20 md:py-[60px] py-10' id='life'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='text-center max-w-5xl mx-auto'>
          <SectionHeader
            title={<>Life @ Codewinglet</>}
            description='At Codewinglet, we empower you to explore your strengths, chase your ambitions, and build a career you love with a workplace that balances innovation, teamwork, and a daily spark of joy.'
            headingClassName='text-gray-800'
            descriptionClassName='text-gray-600'
          />
        </div>

        {/* Masonry: CSS columns + break-inside-avoid; items keep natural aspect ratio */}
        <div className='columns-1 sm:columns-3 gap-2 md:gap-8 mt-8 md:mt-12'>
          {galleryPhotos.map((photo, index) => (
            <div
              key={`${photo.asset}-${index}`}
              className='break-inside-avoid mb-2 md:mb-8 w-full overflow-hidden rounded-lg bg-gray-100'
            >
              <Image
                src={photo.asset}
                alt={photo.asset}
                width={100}
                height={100}
                className='w-full h-auto object-cover'
                sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

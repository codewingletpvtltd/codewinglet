'use client';
import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import { SectionHeader } from '@codewinglet/components';
import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';

import photos from './Photos';

export default function WorkLife() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div
        className='bg-gray-800 lg:py-20 md:py-[60px] py-10 scroll-mt-40'
        id='life'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <SectionHeader
            title={<>Work life @Codewinglet</>}
            description='Unlock your full potential, and pursue your passions in this empowering environment!'
            descriptionClassName='text-gray-400'
            headingClassName='text-white'
          />
          <div className='md:mt-[50px] mt-[30px]'>
            <RowsPhotoAlbum
              photos={photos}
              onClick={({ index }) => setIndex(index)}
            />
            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Zoom]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

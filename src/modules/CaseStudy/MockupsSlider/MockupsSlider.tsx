'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import '/src/modules/CaseStudy/MockupsSlider/MockupSlider.css';

const MockupsSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clone the slider to create an infinite scroll effect
    const slider = sliderRef.current;
    if (slider) {
      const clone = slider.cloneNode(true);
      slider.parentNode?.appendChild(clone);
    }
  }, []);

  return (
    <div className='logoSlider bg-white lg:pb-20 md:pb-[60px] pb-10'>
      <div className='logosSlide' ref={sliderRef}>
        <div className='slide'>
          <Image
            src='/assets/CaseStudy/Mockups_1.png'
            alt='Mockups_1'
            width={839}
            height={800}
          />
        </div>
        <div className='slide'>
          <Image
            src='/assets/CaseStudy/Mockups_2.png'
            alt='Mockups_1'
            width={541}
            height={385}
          />
          <Image
            src='/assets/CaseStudy/Mockups_3.png'
            alt='Mockups_1'
            width={541}
            height={385}
          />
        </div>
        <div className='slide'>
          <Image
            src='/assets/CaseStudy/Mockups_1.png'
            alt='Mockups_1'
            width={839}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default MockupsSlider;

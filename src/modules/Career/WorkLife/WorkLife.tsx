'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Arrow } from '@codewinglet/assets';
import { SectionHeader } from '@codewinglet/components';

import galleryPhotos from './galleryPhotos';

const GALLERY_PATH = '/career/gallery';
const CAROUSEL_INTERVAL_MS = 5000;
const SLIDE_DURATION_S = 1;

/* ---------- Sliding Card ---------- */
function SlidingCard({
  index,
  isActive,
  isLast,
  onClick,
}: {
  index: number;
  isActive: boolean;
  isLast?: boolean;
  onClick?: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const [next, setNext] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);

  // Keep a ref so we always have the latest `current` value
  // inside the effect without adding it as a dependency
  const currentRef = useRef(current);
  currentRef.current = current;

  // Track whether an animation is already in progress
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!isActive) return;
    if (isAnimatingRef.current) return; // skip if already sliding

    const incoming = (currentRef.current + 5) % galleryPhotos.length;
    isAnimatingRef.current = true;
    setNext(incoming);
    setAnimKey((k) => k + 1);
  }, [isActive]);

  const handleAnimationComplete = () => {
    setNext((n) => {
      if (n !== null) {
        setCurrent(n);
        currentRef.current = n;
      }
      return null;
    });
    isAnimatingRef.current = false;
  };

  return (
    <div
      onClick={onClick}
      className='relative w-full overflow-hidden rounded-xl md:aspect-[4/3] aspect-square group cursor-pointer'
    >
      {/* Settled image */}
      <Image
        src={galleryPhotos[current].asset}
        alt={galleryPhotos[current].asset}
        className='absolute inset-0 w-full h-full object-cover'
        unoptimized
        width={100}
        height={100}
      />

      {/* Incoming image — only mounted during slide */}
      {next !== null && (
        <motion.img
          key={animKey}
          src={galleryPhotos[next].asset}
          alt={galleryPhotos[next].asset}
          className='absolute inset-0 w-full h-full object-cover'
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: SLIDE_DURATION_S, ease: 'easeInOut' }}
          onAnimationComplete={handleAnimationComplete}
        />
      )}

      {isLast && (
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/70 group-hover:bg-black/40 transition-colors duration-200'>
          <Arrow className='w-6 h-6 text-white' />
          <span className='text-white font-medium'>See More</span>
        </div>
      )}
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function WorkLife() {
  const router = useRouter();

  // Start at -1 so the very first tick activates card 0
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 5);
    }, CAROUSEL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='bg-gray-800 lg:py-20 md:py-[60px] py-10 scroll-mt-40'
      id='life'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Work life @Codewinglet</>}
          description='A place where your passion meets opportunity and your potential becomes reality.'
          descriptionClassName='!text-gray-400'
          headingClassName='text-white'
        />

        <div className='md:mt-[50px] mt-[30px] space-y-4'>
          {/* Row 1 */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {galleryPhotos.slice(0, 2).map((_, index) => (
              <SlidingCard
                key={index}
                index={index}
                isActive={activeCard === index}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {galleryPhotos.slice(2, 5).map((_, index, arr) => {
              const globalIndex = index + 2;

              return (
                <SlidingCard
                  key={index}
                  index={globalIndex}
                  isActive={activeCard === globalIndex}
                  isLast={index === arr.length - 1}
                  onClick={() => router.push(GALLERY_PATH)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

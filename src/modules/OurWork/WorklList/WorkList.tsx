'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Button, Pagination, Typography } from '@codewinglet/components';

import { ourWorkData } from './workData';

const WorkList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='bg-white md:pb-16 pb-10'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 2xl:gap-[50px] lg:gap-10 md:gap-[30px] gap-[15px]'>
            {ourWorkData.map((item, index) => (
              <div
                key={index}
                className='text-primary 2xl:w-[436px] lg:w-[400px] flex md:flex-col md:gap-0 gap-4 relative'
              >
                <span className='text-white bg-white/30 border border-white/60 rounded-full text-tagLight px-2.5 py-0.5 absolute right-5 top-5 md:block hidden'>
                  {item.tag}
                </span>
                <Image
                  src={item.img}
                  alt='icon'
                  width={436}
                  height={269}
                  className='lg:w-[436px] md:w-[329px] w-[134px] lg:h-[269px] md:h-[216px] h-[145px]'
                />
                <div className='md:pt-0 pt-5'>
                  <span className='text-secondary md:text-paragraph2 text-tagExtraLight md:mt-4 block'>
                    {item.label}
                  </span>
                  <Typography className='md:text-[19px] text-tag mt-1.5 line-clamp-2'>
                    {item.description}
                  </Typography>

                  <Button
                    className='p-0 !h-auto md:mt-6 mt-[15px] underline'
                    variant='link'
                  >
                    <Link
                      href={`/our-work/${item.id}/${item.project}`}
                      rel='noopener noreferrer'
                      className='flex items-center justify-center gap-3 md:text-paragraph2 text-tag'
                    >
                      Know more
                      <Arrow />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className='lg:mt-20 mt-[30px] border-t border-headerBoxBorder'>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkList;

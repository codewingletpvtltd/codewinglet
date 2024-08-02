/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../../../components/SectionHeader';
import { openings } from './constants';

const designation = [
  {
    title: 'All Job',
  },
  {
    title: 'Designing',
  },
  {
    title: 'Developing',
  },
  {
    title: 'QA tester',
  },
];

const CurrentOpenings = () => (
  <>
    <div className='bg-white sm:py-20 py-[30px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Current job openings</>}
          description='Customers. Empower your business to deliver exactly what users crave'
          descriptionClassName='text-secondary'
        />

        <div className='flex items-center justify-between mt-[55px]'>
          <div className='flex gap-2.5'>
            {designation.map((designation) => (
              <div key={designation.title}>
                <Link
                  href='/'
                  className='bg-bg hover:text-white hover:bg-primary py-2.5 px-5'
                >
                  {designation.title}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <form action='' className='flex items-center gap-3'>
              <input
                type='search'
                placeholder='Search jobs'
                className='border border-headerBoxBorder py-[12px] px-5 text-paragraph2Light placeholder:text-secondary placeholder:text-paragraph2Light focus:outline-none focus:border-primary w-[477px]'
              />

              <Button
                variant='default'
                type='submit'
                className='w-[52px] h-[52px]'
              >
                <Arrow />
              </Button>
            </form>
          </div>
        </div>

        <div>
          {openings.map((opening) => (
            <div
              key={opening.id}
              className='flex justify-between border-b border-headerBoxBorder pt-[70px] pb-[50px]'
            >
              <div>
                <Typography className='text-subtitle2 mb-3.5'>
                  {opening.title} <span>{opening.experience}</span>
                </Typography>
                <div className='flex gap-5 items-center'>
                  <Typography className='flex items-center gap-1.5'>
                    {' '}
                    <Image
                      src='/assets/career/world.svg'
                      alt='world'
                      width={16}
                      height={16}
                    />{' '}
                    {opening.site}
                  </Typography>
                  <hr className='w-[1px] h-4 bg-headerBoxBorder' />
                  <Typography className='flex items-center gap-1.5'>
                    {' '}
                    <Image
                      src='/assets/career/type.svg'
                      alt='type'
                      width={16}
                      height={16}
                    />{' '}
                    {opening.type}
                  </Typography>
                </div>
              </div>

              <Typography className='w-[458px] text-paragraph2Light text-secondary'>
                {opening.desc}
              </Typography>
              <div className='flex cursor-pointer text-primary items-center group gap-2.5'>
                <Link href='/' target='_blank' className='text-tag underline'>
                  {opening.button}
                </Link>
                <Arrow />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
export default CurrentOpenings;

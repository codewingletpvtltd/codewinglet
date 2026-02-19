'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Link from 'next/link';

import { xl } from '@codewinglet/constants/mediaQueryConst';
import { useScreenSize } from '@codewinglet/hooks';
import { getClassNames } from '@codewinglet/utils';

import Button from '../Button';
import Drawer from '../Drawer/Drawer';
import MenuIcon from '../MenuIcon';
import { MobileMenu, NavMenu } from './components';
import { HeaderProps } from './types';
import useHeader from './useHeader';
import Typography from '../Typography';

const Header: FC<HeaderProps> = ({ isScroll }) => {
  const router = useRouter();
  const isLarge = useScreenSize(xl);
  const { showMenu, onMenu, setSubMenuIndex, subMenuIndex, onNavigate } =
    useHeader();

  const pathName = usePathname();
  const showBanner = pathName !== '/event-form' && pathName !== '/thank-you';

  return (
    <>
      {showBanner && (
        <div className='bg-white font-light py-4 fixed top-0 z-[100] w-full px-4'>
          <div className='container w-full flex items-center justify-center md:flex-row flex-col lg:px-[15px] sm:px-[30px] px-4'>
            <Typography className='text-center lg:text-tag text-tagExtraLight  xl:flex items-center gap-2.5'>
              🎉 We’re Hiring! Join Our Team 🚀{' '}
              {/* <span className='font-normal'>
                Register here to compete and showcase your skills
              </span> */}
              <div className='hurry-up-animation inline-block ml-2'>
                <Link href='/career'>
                  <div className='font-bold hurryUp-text'>Apply Here</div>
                </Link>
              </div>
            </Typography>
            {/* <div className='md:mt-0 mt-1 flex md:flex-row flex-col md:gap-10 gap-2'>
              <Link href='/event-form' className='md:m-0 mx-auto'>
                <Button
                  variant='link'
                  className='gap-2.5 underline lg:text-paragraph2 text-tag !py-0 !h-auto'
                >
                  REGISTER HERE <Arrow />{' '}
                </Button>
              </Link>
              <Button
                variant='link'
                className='lg:text-paragraph2 text-tag uppercase p-0 flex items-center gap-2 underline !py-0 !h-auto'
                onClick={handleDownload}
              >
                Download Event Details
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
                  <path d='M7 11l5 5l5 -5' />
                  <path d='M12 4l0 12' />
                </svg>
              </Button>
            </div> */}
          </div>
        </div>
      )}
      <header
        id='header'
        className={getClassNames(
          'fixed flex items-center z-50 w-full sm:py-5 md:py-0 lg:py-0 lg:px-20',
          showBanner ? 'top-[50px]' : 'top-0',
          pathName === '/event-form' || pathName === '/thank-you'
            ? 'bg-gray-800'
            : isScroll
            ? 'bg-gray-800'
            : pathName === '/contact-us'
            ? 'bg-gray-800'
            : pathName === '/about-us'
            ? 'bg-gray-800'
            : pathName === '/blogs'
            ? 'bg-gray-800'
            : pathName === '/privacy-policy'
            ? 'bg-gray-800'
            : pathName === '/terms-and-conditions'
            ? 'bg-gray-800'
            : pathName === '/career'
            ? 'bg-gray-800'
            : pathName === '/technology'
            ? 'bg-gray-800'
            : pathName === '/service'
            ? 'bg-gray-800'
            : pathName === '/career/gallery'
            ? 'bg-gray-800'
            : pathName === '/event-form'
            ? 'bg-gray-800'
            : 'bg-transparent'
        )}
      >
        <div className='flex items-center max-w-[1410px] lg:h-[86px] md:h-[90px] sm:h-[78px] h-[78px] justify-between relative w-full px-[30px] lg:px-[15px] md:px-[30px] sm:px-[30px] mx-auto'>
          <div>
            <Image
              src={'/assets/icons/LogoBlack.svg'}
              width={20}
              height={20}
              alt='Codewinglet Private Limited Logo1'
              className='w-[191px] md:w-[240px] xl:w-[252px] cursor-pointer invert'
              onClick={() => router.push('/')}
              priority
            />
          </div>

          <NavMenu />

          <Button
            onClick={onNavigate('contact-us')}
            className='w-[178px] lg:h-11 border-white text-white hidden xl:block'
          >
            Contact Us
          </Button>

          <MenuIcon
            isOpen={showMenu}
            onClick={onMenu}
            className=' [&>span]:bg-white'
          />
        </div>
        {!isLarge && (
          <Drawer
            onMenu={onMenu}
            disableBackdrop={false}
            showMenu={showMenu}
            className='z-40 md:max-w-[500px]'
          >
            <div className='px-5 md:px-[35px] pt-10'>
              <div className='flex items-center max-w-[1410px] justify-between relative w-full md:ml-[-2px] mx-auto lg-auto md:h-[90px] h-auto mb-auto'>
                <div className='flex justify-between items-center my-5'>
                  <Image
                    src={'assets/icons/LogoWhite.svg'}
                    width={20}
                    height={10}
                    alt='Codewinglet Private Limited Logo1'
                    className='w-[191px] sm:h-auto h-[38px] md:w-60 xl:w-[252px] cursor-pointer invert'
                    onClick={() => router.push('/')}
                    loading='lazy'
                  />
                </div>
                <div
                  onClick={onMenu}
                  className='h-[45px] w-[45px] !my-[0px] z-[100] flex items-center justify-center absolute sm:right-[-15px] right-[-13px]'
                >
                  <MenuIcon
                    isOpen={showMenu}
                    // onClick={onMenu}
                    // className='!my-[0px] z-[100] justify-center'
                  />
                </div>
              </div>
              <MobileMenu
                onMenu={onMenu}
                setSubMenuIndex={setSubMenuIndex}
                subMenuIndex={subMenuIndex}
              />
            </div>
          </Drawer>
        )}
      </header>
    </>
  );
};

export default React.memo(Header);

/* eslint-disable import/order */
'use client';
import { xl } from '@codewinglet/constants/mediaQueryConst';
import { useScreenSize } from '@codewinglet/hooks';
import { getClassNames } from '@codewinglet/utils';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Button from '../Button';
import Drawer from '../Drawer/Drawer';
import MenuIcon from '../MenuIcon';
import { MobileMenu, NavMenu } from './components';
import { HeaderProps } from './types';
import useHeader from './useHeader';

//import { DrawerContent } from '../../../@codewinglet/ui/drawer';

const Header: FC<HeaderProps> = ({ isScroll }) => {
  const router = useRouter();
  const isLarge = useScreenSize(xl);
  const { showMenu, onMenu, setSubMenuIndex, subMenuIndex, onNavigate } =
    useHeader();

  const pathName = usePathname();

  return (
    <header
      id='header'
      className={getClassNames(
        'fixed flex items-center top-0 z-50 w-full sm:py-5 md:py-[0px] lg:py-0 lg:px-20',
        isScroll
          ? 'bg-primary'
          : pathName === '/contact-us'
          ? 'bg-primary'
          : pathName === '/about-us'
          ? 'bg-primary'
          : pathName === '/custom-component'
          ? 'bg-primary'
          : pathName === '/privacy-policy'
          ? 'bg-primary'
          : pathName === '/terms-and-conditions'
          ? 'bg-primary'
          : pathName === '/career'
          ? 'bg-primary'
          : 'bg-transparent'
      )}
    >
      <div className='flex items-center max-w-[1410px] lg:h-[86px] md:h-[90px] sm:h-[78px] h-[78px] justify-between relative w-full px-[30px] lg:px-[15px] md:px-[30px] sm:px-[30px] mx-auto'>
        <div>
          <Image
            src={'assets/icons/LogoBlack.svg'}
            width={20}
            height={20}
            alt='Codewinglet Private Limited Logo1'
            className='w-[191px] md:w-[240px] xl:w-[252px] cursor-pointer invert'
            onClick={() => router.push('/')}
            loading='eager'
          />
        </div>

        <NavMenu />
        {isLarge && (
          <Button
            onClick={onNavigate('contact-us')}
            className='w-[143px] lg:h-10 border-white text-white'
          >
            Contact Us
          </Button>
        )}

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
          <div className='px-[30px] md:px-[35px]'>
            <div className='flex items-center max-w-[1410px] justify-between relative w-full md:ml-[-2px] mx-auto lg-auto md:h-[90px] h-auto mb-auto'>
              <div className='flex justify-between items-center my-5'>
                <Image
                  src={'assets/icons/LogoWhite.svg'}
                  width={20}
                  height={10}
                  alt='Codewinglet Private Limited Logo1'
                  className='w-[191px] sm:h-auto h-[38px] md:w-60 xl:w-[252px] cursor-pointer invert'
                  onClick={() => router.push('/')}
                  loading='eager'
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
  );
};

export default React.memo(Header);

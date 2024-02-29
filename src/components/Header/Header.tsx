'use client';
import { useRouter, usePathname } from 'next/navigation';
import React, { FC } from 'react';
import Image from 'next/image';
import { useScreenSize } from '@codewinglet/hooks';
import { getClassNames } from '@codewinglet/utils';
import { xl } from '@codewinglet/constants/mediaQueryConst';
import MenuIcon from '../MenuIcon';
import { MobileMenu, NavMenu } from './components';
import useHeader from './useHeader';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ isScroll }) => {
  const router = useRouter();
  const isLarge = useScreenSize(xl);
  const { showMenu, onMenu } = useHeader();

  const pathName = usePathname();

  return (
    <header
      id='header'
      className={getClassNames(
        'fixed h-[90px] flex items-center top-0 z-50 w-full',
        showMenu
          ? 'bg-white'
          : isScroll
          ? 'bg-primary'
          : pathName === '/contact-us'
          ? 'bg-primary'
          : 'bg-transparent'
      )}
    >
      <div className='container'>
        <div className='flex items-center max-w-[1410px] justify-between relative px-[15px]'>
          <div>
            <Image
              src={'assets/icons/LogoBlack.svg'}
              width={20}
              height={20}
              alt='Codewinglet Private Limited Logo'
              className='w-[191px] xl:w-[252px] cursor-pointer invert'
              onClick={() => router.push('/')}
              loading='eager'
            />
          </div>
          <NavMenu />
          <MenuIcon isOpen={showMenu} onClick={onMenu} />
        </div>
        {!isLarge && showMenu && <MobileMenu onMenu={onMenu} />}
      </div>
    </header>
  );
};

export default React.memo(Header);

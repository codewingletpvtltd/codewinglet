'use client';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Image from 'next/image';
import Logo from '@codewinglet/assets/logo_black.svg';
import { useScreenSize } from '@codewinglet/hooks';
import { getClassNames } from '@codewinglet/utils';
import { xl } from '@codewinglet/constants/mediaQueryConst';
import MenuIcon from '../MenuIcon';
import Drawer from '../Drawer/Drawer';
import { NavMenu, MobileMenu } from './components';
import useHeader from './useHeader';
import { HeaderProps } from './types';

//import { DrawerContent } from '../../../@codewinglet/ui/drawer';

const Header: FC<HeaderProps> = ({ isScroll }) => {
  const router = useRouter();
  const isLarge = useScreenSize(xl);
  const { showMenu, onMenu } = useHeader();

  return (
    <header
      id='header'
      className={getClassNames(
        'fixed h-[90px] flex items-center top-0 z-50 w-full',
        isScroll ? 'bg-primary' : 'bg-transparent'
      )}
    >
      <div className='flex items-center max-w-[1410px] justify-between relative px-[15px] w-full lg:px-[15px] sm:px-[30px] mx-auto'>
        <div>
          <Image
            src={Logo}
            alt='Codewinglet Private Limited Logo'
            className='w-[191px] xl:w-[252px] cursor-pointer invert'
            onClick={() => router.push('/')}
            loading='eager'
          />
        </div>

        <NavMenu />
        <MenuIcon isOpen={showMenu} onClick={onMenu} />
      </div>
      {!isLarge && (
        // <div className='w-full max-w-[420px] h-[calc(100%_-_122px)]'>
        //   <Drawer >
        //     <DrawerContent
        //       className='h-screen block w-full !border-none'
        //       draggable={false}
        //       onDrag={(e) => e.preventDefault()}
        //       style={{ pointerEvents: 'none' }}
        //     >
        //       <div draggable={false}>
        //
        //       </div>
        //     </DrawerContent>
        //   </Drawer>
        // </div>

        <Drawer showMenu={showMenu} className='z-40'>
          <MobileMenu onMenu={onMenu} />
        </Drawer>
      )}
    </header>
  );
};

export default React.memo(Header);

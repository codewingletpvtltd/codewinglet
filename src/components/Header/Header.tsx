'use client';
import Image from 'next/image';
import Logo from '@codewinglet/assets/company_logo.svg';
import { useScreenSize } from '@codewinglet/hooks';
import { lg } from '@codewinglet/constants/mediaQueryConst';
import { getClassNames } from '@codewinglet/utils/cn';
import MenuIcon from '../MenuIcon';
import { MobileMenu, NavMenu } from './components';
import useHeader from './useHeader';

const Header = () => {
  const isLarge = useScreenSize(lg);
  const { showMenu, onMenu } = useHeader();
  return (
    <header
      className={getClassNames(
        'fixed h-[90px] flex items-center top-0 z-50 w-full',
        showMenu ? 'bg-white' : ''
      )}
    >
      <div className='container'>
        <div className='flex items-center max-w-screen-xl justify-between mx-[20px] md:mx-[38px] xl:mx-auto relative'>
          <div>
            <Image
              src={Logo}
              alt='Codewinglet Private Limited Logo'
              className='w-[191px] xl:w-[252px]'
            />
          </div>
          {isLarge ? (
            <NavMenu />
          ) : (
            <MenuIcon isOpen={showMenu} onClick={onMenu} />
          )}
        </div>
        {!isLarge && showMenu && <MobileMenu />}
      </div>
    </header>
  );
};

export default Header;

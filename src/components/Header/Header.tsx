'use client';
import Image from 'next/image';
import Logo from '@codewinglet/assets/company_logo.svg';
import { useScreenSize } from '@codewinglet/hooks';
import { lg } from '@codewinglet/constants/mediaQueryConst';
import { Menu } from '@codewinglet/assets';
import { NavMenu } from './components';

const Header = () => {
  const isLarge = useScreenSize(lg);
  return (
    <header className='h-[90px] flex items-center absolute top-0 z-50 w-full'>
      <div className='container'>
        <div className='flex items-center max-w-screen-xl justify-between mx-[20px] md:mx-[38px] xl:mx-auto'>
          <div>
            <Image
              src={Logo}
              alt='Codewinglet Private Limited Logo'
              className='w-[191px] xl:w-[252px]'
            />
          </div>
          {isLarge ? <NavMenu /> : <Menu />}
        </div>
      </div>
    </header>
  );
};

export default Header;

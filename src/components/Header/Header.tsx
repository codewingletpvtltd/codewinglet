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
    <header className='h-[90px] flex items-center absolute top-0 z-50 w-[calc(100%-20px)] mx-[20px] md:w-[calc(100%-38px)] md:mx-[38px] lg:mx-auto'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div>
            <Image
              src={Logo}
              alt='Codewinglet Private Limited Logo'
              width={250}
              height={70}
            />
          </div>
          {isLarge ? <NavMenu /> : <Menu />}
        </div>
      </div>
    </header>
  );
};

export default Header;

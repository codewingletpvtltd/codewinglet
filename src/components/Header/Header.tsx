import Image from 'next/image';
import Logo from '@codewinglet/assets/company_logo.svg';
import NavMenu from './components/NavigationMenu';

const Header = () => (
  <header className='h-[90px] flex items-center fixed top-0 z-50 w-full'>
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
        <NavMenu />
      </div>
    </div>
  </header>
);

export default Header;

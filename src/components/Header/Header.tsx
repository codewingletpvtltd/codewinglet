import Link from 'next/link';

const headerMenu = [
  {
    id: 1,
    label: 'Services',
    path: '/',
  },
  {
    id: 2,
    label: 'Technology',
    path: '/',
  },
];

const Header = () => (
  <header className='h-[90px] flex items-center'>
    <div className='container'>
      <div className='flex items-center justify-between'>
        <div>
          {/* <Image
            src={Logo}
            alt='Codewinglet Private Limited Logo'
            width={250}
            height={70}
          /> */}
        </div>
        <ul className='flex'>
          {headerMenu.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </header>
);

export default Header;

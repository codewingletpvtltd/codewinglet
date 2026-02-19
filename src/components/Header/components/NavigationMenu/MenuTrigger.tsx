import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import Typography from '../../../Typography';
import { MenuTriggerProps } from '../../types';

const MenuTrigger: FC<MenuTriggerProps> = ({
  label,
  showIcon,
  href,
  hasChild = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = 'flex flex-row items-center cursor-pointer';

  const typographyClass = `
    relative text-paragraph2Light text-white
    after:transition-all after:duration-500 after:ease-in-out
    after:absolute after:bottom-[-11px] after:left-0 after:h-[2px] after:bg-white
    ${
      isActive
        ? 'after:w-[calc(100%)] after:content'
        : 'after:w-0 hover:after:w-[calc(100%)] hover:after:content'
    }
  `.trim();

  return (
    <Link href={href} className={linkClass}>
      <Typography className={typographyClass}>{label}</Typography>
      {!hasChild && showIcon && (
        <Image
          src={'/assets/icons/MenuDownArrow.svg'}
          alt='MenuDownArrow'
          width={50}
          height={50}
          className='transition duration-200 group-hover:rotate-180 ml-[3px]'
        />
      )}
    </Link>
  );
};

export default MenuTrigger;

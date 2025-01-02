'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Button from '@codewinglet/components/Button';
import Drawer from '@codewinglet/components/Drawer/Drawer';

import { MobileMenuProps } from '../../types';
import MobileSubMenu from './MobileSubMenu';
import { navMenu } from './constants';
import useMobileMenu from './useMobileMenu';

const MobileMenu: FC<MobileMenuProps> = ({
  onMenu,
  subMenuIndex,
  setSubMenuIndex,
}) => {
  const { onNavigate } = useMobileMenu(onMenu);
  return (
    <>
      <div className='flex flex-col  gap-2.5 z-40 '>
        <div className='pointer-events-auto'>
          {navMenu.map((item, index) => (
            <div key={item.label} className='py-5'>
              {item.children ? (
                <Link
                  href={item.path}
                  className='cursor-pointer flex justify-between md:text-subtitle1 text-paragraph1 !whitespace-nowrap'
                  onClick={() => setSubMenuIndex(index)}
                >
                  {item.label}

                  {item.children && (
                    <Image
                      src='/assets/icons/RightArrow.svg'
                      alt='RightArrow'
                      width={16}
                      height={16}
                    />
                  )}
                </Link>
              ) : (
                <Link
                  href={item.path || ''}
                  className='cursor-pointer flex justify-between md:text-subtitle1 text-paragraph1 !whitespace-nowrap'
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Drawer
            disableBackdrop={true}
            showMenu={subMenuIndex >= 0}
            className='z-50 md:max-w-[500px]'
          >
            {navMenu[subMenuIndex] && (
              <MobileSubMenu
                parentMenu={navMenu[subMenuIndex]}
                onBack={() => setSubMenuIndex(-1)}
              />
            )}
          </Drawer>
        </div>
        <div className='text-center bottom-10 w-full absolute left-0'>
          <Button
            variant='blackOutline'
            className='border border-gray-800 md:w-[409px] w-[315px]'
            onClick={onNavigate('contact-us')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

'use client';
import { FC } from 'react';

import Image from 'next/image';
import Drawer from '@codewinglet/components/Drawer/Drawer';
import Button from '@codewinglet/components/Button';
import { MobileMenuProps } from '../../types';
import useMobileMenu from './useMobileMenu';
import MobileSubMenu from './MobileSubMenu';
import { navMenu } from './constants';

const MobileMenu: FC<MobileMenuProps> = ({
  onMenu,
  subMenuIndex,
  setSubMenuIndex,
}) => {
  const { onNavigate } = useMobileMenu(onMenu);

  return (
    <>
      <div className='flex flex-col  gap-[10px] z-40 '>
        <ul className='pointer-events-auto'>
          {navMenu.map((item, index) => (
            <>
              <li key={item.label} className='mb-10'>
                <div
                  className='flex justify-between'
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
                </div>
              </li>
            </>
          ))}

          <Drawer
            disableBackdrop={true}
            showMenu={subMenuIndex >= 0}
            className='z-50 md:max-w-[479px]'
          >
            {navMenu[subMenuIndex] && (
              <MobileSubMenu
                parentMenu={navMenu[subMenuIndex]}
                onBack={() => setSubMenuIndex(-1)}
              />
            )}
          </Drawer>
        </ul>
        <div className='text-center bottom-10 w-full absolute left-0'>
          <Button
            className='border border-primary w-[315px]'
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

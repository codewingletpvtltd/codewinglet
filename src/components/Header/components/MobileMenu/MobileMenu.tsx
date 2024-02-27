'use client';
import { FC } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '@codewinglet/components';

import Drawer from '@codewinglet/components/Drawer/Drawer';
import { MobileMenuProps } from '../../types';
import useMobileMenu from './useMobileMenu';
import MobileSubMenu from './MobileSubMenu';
import { navMenu } from './constants';

const MobileMenu: FC<MobileMenuProps> = ({ onMenu }) => {
  const { sunMenuIndex, setSubMenuIndex, onNavigate } = useMobileMenu(onMenu);
  //const { showMenu, onMenu } = useHeader();
  return (
    <>
      {/* <div className='fixed bg-[rgba(0,0,0,0.5)] top-[80px] bottom-0 right-0 left-0 inset-0 -z-10 bg-white' /> */}

      <div className='flex flex-col mx-[20px] md:mx-[38px] gap-[10px] z-40'>
        <ul className='pointer-events-auto'>
          {navMenu.map((item, index) => (
            <>
              <li key={item.label}>
                <div
                  className='flex justify-between'
                  onClick={() => setSubMenuIndex(index)}
                >
                  {item.label}

                  {item.children && (
                    <ChevronDownIcon className='h-[17px] w-[40px] stroke-[5px] shrink-0 transition-transform duration-200' />
                  )}
                </div>
              </li>
            </>
            // <li value={item.label} key={item.label}>
            //   <AccordionTrigger
            //     className='[&[data-state=open]>svg]:rotate-180'
            //     icon={
            //       <ChevronDownIcon className='h-[17px] w-[40px] stroke-[5px] shrink-0 transition-transform duration-200' />
            //     }
            //   >
            //     {item.label}
            //   </AccordionTrigger>
            //   <AccordionContent>
            //     {item.children ? (
            //       item.category ? (
            //         <ul className='grid grid-cols-2 list-none border-b border-b-lightGray pb-[20px] gap-[10px]'>
            //           {item.children.map((menuItem, menuIndex) => (
            //             <li key={`mobile-menu-item-${index}-${menuIndex}`}>
            //               <ul className='list-none grid grid-flow-row gap-[16px] mb-[30px]'>
            //                 <ListItem
            //                   key={`mobile-menu-item-${index}`}
            //                   icon={menuItem.icon}
            //                   label={menuItem.label}
            //                   labelClassName='!whitespace-normal'
            //                   isHeader
            //                 />
            //                 {menuItem.menu?.map((val, idx) => (
            //                   <ListItem
            //                     key={`mobile-menu-item-${index}-${menuIndex}-${idx}`}
            //                     icon={val.icon}
            //                     label={val.label}
            //                     labelClassName='!whitespace-normal'
            //                     href={val.path ? val.path : '/not-found'}
            //                     onClick={onMenu}
            //                   />
            //                 ))}
            //               </ul>
            //             </li>
            //           ))}
            //         </ul>
            //       ) : (
            //         <ul className='grid grid-flow-row grid-cols-2 list-none border-b border-b-lightGray pb-[20px] gap-[10px]'>
            //           {item.children.map((val, index) => (
            //             <ListItem
            //               key={`mobile-menu-item-${index}`}
            //               icon={val.icon}
            //               label={val.label}
            //               onClick={onMenu}
            //               href={val.path ? val.path : '/not-found'}
            //               labelClassName='!whitespace-normal'
            //             />
            //           ))}
            //         </ul>
            //       )
            //     ) : null}
            //   </AccordionContent>
            // </li>
          ))}

          <Drawer showMenu={sunMenuIndex >= 0} className='z-50'>
            {navMenu[sunMenuIndex] && (
              <MobileSubMenu
                parentMenu={navMenu[sunMenuIndex]}
                onBack={() => setSubMenuIndex(-1)}
              />
            )}
          </Drawer>
        </ul>
        <div>
          <Button onClick={onNavigate('contact-us')}>Contact Us</Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

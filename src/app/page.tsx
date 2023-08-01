'use client';
import React from 'react';
import Image from 'next/image';
import { Typography } from '@codewinglet/components';
import {
  Menu,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  MenuList,
} from '../components/';
import Logo from '../assets/reactJS.svg';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuItems = {
    'col 1': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
    'col 2': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
    'col 3': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
  };
  return (
    <div>
      Home Page Y y
      <h1 className='font-secondary text-h1 font-700'>
        font-family: Bespoke Sans
      </h1>
      <h1 className='font-primary'>primary font family</h1>
      <div className='p-3'>
        <button id='menu-button' onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
        <Menu open={isOpen} onClose={() => setIsOpen(false)}>
          {Object.entries(menuItems).map(([key, items]) => (
            <MenuList key={key}>
              {items.items.map((item, index) => (
                <MenuItem key={`${key}-${index}`}>
                  <MenuItemIcon>
                    <Image src={item.icon} alt='' />
                  </MenuItemIcon>
                  <MenuItemText>{item.title}</MenuItemText>
                </MenuItem>
              ))}
            </MenuList>
          ))}
        </Menu>
      </div>
      <Typography>Something</Typography>
    </div>
  );
}

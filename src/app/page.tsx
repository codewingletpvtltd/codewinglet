'use client';
import React from 'react';
import Image from 'next/image';
import Logo from 'assets/reactJS.svg';
import { Menu } from '@codewinglet/components';

export default function Home() {
  const [anchorEle, setAnchorEle] = React.useState<null | HTMLElement>(null);

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
    'col 4': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
    'col 5': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
    'col 6': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
    'col 7': {
      icon: Logo,
      items: [
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
        { icon: Logo, title: 'React JS' },
      ],
    },
    'col 8': {
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
      <div className='p-3 w-[100%] mt-[150px] flex justify-start items-center gap-3'>
        {[...new Array(2)].map((value, index) => {
          const open = anchorEle?.id === `menu1-${index}`;
          return (
            <div key={`menu1-${index}`} onMouseLeave={() => setAnchorEle(null)}>
              <button
                id={`menu1-${index}`}
                className='mx-50 bg-secondary text-white px-5'
                onMouseEnter={(e) => setAnchorEle(e.currentTarget)}
              >
                Menu {index + 1}
              </button>
              <Menu open={open} anchorEle={anchorEle}>
                {Object.entries(menuItems).map(([key, items], idx) => (
                  <Menu.List key={`menu1-${parseInt(key) * 2}-${key}-${idx}`}>
                    {items.items.map((item, index) => (
                      <Menu.Item key={`menu1-${key}-${idx}-${index}`}>
                        <Menu.ItemIcon>
                          <Image src={item.icon} alt='' />
                        </Menu.ItemIcon>
                        <Menu.ItemText
                          className='ml-2'
                          onClick={() => setAnchorEle(null)}
                        >
                          {item.title}
                        </Menu.ItemText>
                      </Menu.Item>
                    ))}
                  </Menu.List>
                ))}
              </Menu>
            </div>
          );
        })}
      </div>
      {/* <div className='p-3 w-[100%] mt-[150px] flex justify-center items-center gap-3'>
        {[...new Array(2)].map((value, index) => {
          const open = anchorEle?.id === `menu2-${index}`;
          return (
            <div key={`menu2-${index}`} onMouseLeave={() => setAnchorEle(null)}>
              <button
                id={`menu2-${index}`}
                className='mx-50 bg-secondary text-white px-5'
                onMouseEnter={(e) => setAnchorEle(e.currentTarget)}
              >
                Menu {index + 1}
              </button>
              <Menu
                open={open}
                anchorEle={anchorEle}
                className={getClassNames(
                  'absolute w-full',
                  open ? 'visible' : 'invisible'
                )}
              >
                {Object.entries(menuItems).map(([key, items], idx) => (
                  <Menu.List key={`menu2-${key}-${idx}`}>
                    {items.items.map((item, index) => (
                      <Menu.Item key={`menu2-${key}-${idx}-${index}`}>
                        <Menu.ItemIcon>
                          <Image src={item.icon} alt='' />
                        </Menu.ItemIcon>
                        <Menu.ItemText
                          className='ml-2'
                          onClick={() => setAnchorEle(null)}
                        >
                          {item.title}
                        </Menu.ItemText>
                      </Menu.Item>
                    ))}
                  </Menu.List>
                ))}
              </Menu>
            </div>
          );
        })}
      </div>
      <div className='p-3 w-[100%] mt-[150px] flex justify-end items-center gap-3'>
        {[...new Array(2)].map((value, index) => {
          const open = anchorEle?.id === `menu3-${index}`;
          return (
            <div key={`menu3-${index}`} onMouseLeave={() => setAnchorEle(null)}>
              <button
                id={`menu3-${index}`}
                className='mx-50 bg-secondary text-white px-5'
                onMouseEnter={(e) => setAnchorEle(e.currentTarget)}
              >
                Menu {index + 1}
              </button>
              <Menu
                open={open}
                anchorEle={anchorEle}
                className={getClassNames(
                  'absolute w-full',
                  open ? 'visible' : 'invisible'
                )}
              >
                {Object.entries(menuItems).map(([key, items], idx) => (
                  <Menu.List key={`menu3-${key}-${idx}`}>
                    {items.items.map((item, index) => (
                      <Menu.Item key={`menu3-${key}-${idx}-${index}`}>
                        <Menu.ItemIcon>
                          <Image src={item.icon} alt='' />
                        </Menu.ItemIcon>
                        <Menu.ItemText
                          className='ml-2'
                          onClick={() => setAnchorEle(null)}
                        >
                          {item.title}
                        </Menu.ItemText>
                      </Menu.Item>
                    ))}
                  </Menu.List>
                ))}
              </Menu>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

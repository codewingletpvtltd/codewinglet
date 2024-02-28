import { StoryObj } from '@storybook/react';
import React from 'react';
import Logo from 'assets/hiring.svg';
import Image from 'next/image';
import Menu from '.';

export default {
  component: Menu,
};

export const Basic: StoryObj<typeof Menu> = {
  args: {
    open: true,
  },
};

export const WithoutHeader = () => {
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
    <div className='p-3 w-[100%] mt-[10px] flex justify-start items-center gap-3'>
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
                        <Image src={item.icon} alt='' width={28} height={28} />
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
  );
};

export const WithHeader = () => {
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
    <div className='p-3 w-[100%] mt-[10px] flex justify-start items-center gap-3'>
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
                  <Menu.Item
                    key={`menu1-${key}-${idx}-${index}`}
                    className='border- pb-[13px]'
                  >
                    <Menu.ItemIcon>
                      <Image src={items.icon} alt='' width={28} height={28} />
                    </Menu.ItemIcon>
                    <Menu.ItemText className='ml-2'>{key}</Menu.ItemText>
                  </Menu.Item>
                  {items.items.map((item, index) => (
                    <Menu.Item key={`menu1-${key}-${idx}-${index}`}>
                      <Menu.ItemIcon>
                        <Image src={item.icon} alt='' width={28} height={28} />
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
  );
};

import { StoryObj } from '@storybook/react';
import Menu from './Menu';
import { MenuList } from '../MenuList';
import { MenuItem } from '../MenuItem';
import { MenuItemIcon } from '../MenuItemIcon';
import Image from 'next/image';
import Logo from '../../assets/reactJS.svg';
import { MenuItemText } from '../MenuItemText';

export default {
  component: Menu,
};

export const Default: StoryObj<typeof Menu> = {
  args: {
    children: (
      <>
        <MenuList key={'col-1'}>
          <MenuItem key={'col-1-1'}>
            <MenuItemIcon>
              <Image src={Logo} alt='' />
            </MenuItemIcon>
            <MenuItemText>{'React JS'}</MenuItemText>
          </MenuItem>
          <MenuItem key={'col-1-2'}>
            <MenuItemIcon>
              <Image src={Logo} alt='' />
            </MenuItemIcon>
            <MenuItemText>{'React JS'}</MenuItemText>
          </MenuItem>
          <MenuItem key={'col-1-3'}>
            <MenuItemIcon>
              <Image src={Logo} alt='' />
            </MenuItemIcon>
            <MenuItemText>{'React JS'}</MenuItemText>
          </MenuItem>
        </MenuList>
        <MenuList key={'col-2'}>
          <MenuItem key={'col-2-1'}>
            <MenuItemIcon>
              <Image src={Logo} alt='' />
            </MenuItemIcon>
            <MenuItemText>{'React JS'}</MenuItemText>
          </MenuItem>
          <MenuItem key={'col-2-2'}>
            <MenuItemIcon>
              <Image src={Logo} alt='' />
            </MenuItemIcon>
            <MenuItemText>{'React JS'}</MenuItemText>
          </MenuItem>
          <MenuItem key={'col-2-3'}>
            <MenuItemIcon>
              <Image src={Logo} alt='' />
            </MenuItemIcon>
            <MenuItemText>{'React JS'}</MenuItemText>
          </MenuItem>
        </MenuList>
      </>
    ),
  },
};

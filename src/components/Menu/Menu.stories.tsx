import { StoryObj } from '@storybook/react';
import Image from 'next/image';
import Logo from 'assets/reactJS.svg';
import Menu from '.';

export default {
  component: Menu,
};

export const Default: StoryObj<typeof Menu> = {
  args: {
    open: true,
    children: (
      <>
        <Menu.List key={'col-1'}>
          <Menu.Item key={'col-1-1'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>

          <Menu.Item key={'col-1-2'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>
          <Menu.Item key={'col-1-3'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>
          <Menu.Item key={'col-1-4'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>
        </Menu.List>
        <Menu.List key={'col-2'}>
          <Menu.Item key={'col-2-1'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>

          <Menu.Item key={'col-2-2'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>
          <Menu.Item key={'col-2-3'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>
          <Menu.Item key={'col-2-4'}>
            <Menu.ItemIcon>
              <Image src={Logo} alt='' />
            </Menu.ItemIcon>
            <Menu.ItemText>{'React JS'}</Menu.ItemText>
          </Menu.Item>
        </Menu.List>
      </>
    ),
  },
};

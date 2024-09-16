import type { Meta } from '@storybook/react';
import Image from 'next/image';

import Frontend from '../../../public/assets/icons/Frontend.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
} satisfies Meta<typeof Tabs>;

export default meta;

const tabs = ['Frontend', 'Backend'];

export const DefaultTabs = () => (
  <Tabs defaultValue='Frontend' className='w-full'>
    <TabsList className='w-full'>
      {tabs.map((label, index) => (
        <TabsTrigger value={label} key={index} className='w-full'>
          <Image
            src={Frontend}
            alt='Frontend'
            className='h-[31px] w-[31px]'
            width={31}
            height={31}
          />
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
    <TabsContent value='Frontend'>Front end</TabsContent>
    <TabsContent value='Backend'>Backend</TabsContent>
  </Tabs>
);

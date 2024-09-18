import { StoryObj } from '@storybook/react';

import Button from '../Button';
import TextField from '../TextField';
import Modal from './Modal';

export default {
  component: Modal,
};

export const Basic: StoryObj<typeof Modal> = {
  args: {
    title: 'Title',
    open: true,
    children: (
      <>
        <TextField placeholder='Full Name*' fullWidth />
        <TextField placeholder='Email*' fullWidth />
        <TextField placeholder='Mobile Number*' fullWidth />
        <Button>Apply Now</Button>
      </>
    ),
  },
};

import { StoryObj } from '@storybook/react';
import TextField from '../TextField';
import Button from '../Button';
import Modal from './Modal';

export default {
  component: Modal,
};

export const Basic: StoryObj<typeof Modal> = {
  args: {
    title: 'Title',
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

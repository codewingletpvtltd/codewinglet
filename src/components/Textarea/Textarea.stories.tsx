import { StoryObj } from '@storybook/react';
import { useState } from 'react';
import Textarea from './Textarea';

export default {
  component: Textarea,
  tags: ['Textarea'],
};

export const BasicTextField: StoryObj<typeof Textarea> = {
  args: {
    label: 'Basic Textarea',
    placeholder: 'Basic Textarea',
  },
};

export const ErrorTextField: StoryObj<typeof Textarea> = {
  args: {
    label: 'Error Textarea',
    placeholder: 'Error Textarea',
    error: true,
    helperText: 'This field is required',
  },
};

export const DisabledTextField: StoryObj<typeof Textarea> = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'Disabled Textarea',
    disabled: true,
  },
};

export const ReadonlyTextField: StoryObj<typeof Textarea> = {
  args: {
    label: 'Readonly Textarea',
    placeholder: 'Readonly Textarea',
    readOnly: true,
  },
};

export const CustomizeTextField: StoryObj<typeof Textarea> = {
  args: {
    label: 'Customize Textarea',
    placeholder: 'Customize Textarea',
    className: 'border-secondary',
    labelClassName: 'text-error',
  },
};

export const FullWidthTextField: StoryObj<typeof Textarea> = {
  args: {
    label: 'FullWidth Textarea',
    placeholder: 'FullWidth Textarea',
    fullWidth: true,
  },
};

export const ControlledTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Textarea
      label='Controlled Text Field'
      placeholder='Controlled Text Field'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

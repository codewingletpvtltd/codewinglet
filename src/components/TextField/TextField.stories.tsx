import { StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextField from './TextField';

export default {
  component: TextField,
  tags: ['TextField'],
};

export const BasicTextField: StoryObj<typeof TextField> = {
  args: {
    label: 'Basic Text Field',
    placeholder: 'Basic Text Field',
  },
};

export const ErrorTextField: StoryObj<typeof TextField> = {
  args: {
    label: 'Error Text Field',
    placeholder: 'Error Text Field',
    error: true,
    helperText: 'This field is required',
  },
};

export const DisabledTextField: StoryObj<typeof TextField> = {
  args: {
    label: 'Disabled Text Field',
    placeholder: 'Disabled Text Field',
    disabled: true,
  },
};

export const ReadonlyTextField: StoryObj<typeof TextField> = {
  args: {
    label: 'Readonly Text Field',
    placeholder: 'Readonly Text Field',
    readOnly: true,
  },
};

export const CustomizeTextField: StoryObj<typeof TextField> = {
  args: {
    label: 'Customize Text Field',
    placeholder: 'Customize Text Field',
    className: 'border-secondary',
    labelClassName: 'text-error',
  },
};

export const FullWidthTextField: StoryObj<typeof TextField> = {
  args: {
    label: 'FullWidth Text Field',
    placeholder: 'FullWidth Text Field',
    fullWidth: true,
  },
};

export const ControlledTextField = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      label="Controlled Text Field"
      placeholder="Controlled Text Field"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

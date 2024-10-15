import { FC } from 'react';

import { Arrow } from '@codewinglet/assets';
import { Button, TextField, Textarea } from '@codewinglet/components';

import { FormProps } from '../types';

const Form: FC<FormProps> = ({ formData, onChangeFormData, onSubmit }) => (
  <form onSubmit={onSubmit} className='col-span-1'>
    <div className=''>
      <TextField
        fullWidth
        label='Full name'
        required
        placeholder='Enter your full name'
        value={formData.name}
        onChange={(e) => onChangeFormData({ name: e.target.value })}
        helperText={formData.errors.name}
        error={!!formData.errors.name}
      />
      <TextField
        fullWidth
        label='Email'
        placeholder='Enter your email'
        value={formData.email}
        required
        onChange={(e) => onChangeFormData({ email: e.target.value })}
        helperText={formData.errors.email}
        error={!!formData.errors.email}
        description='Please provide your business email address'
      />
      <TextField
        fullWidth
        label='Phone number'
        placeholder='Enter your number'
        value={formData.phone}
        onChange={(e) => {
          onChangeFormData({ phone: e.target.value });
        }}
        type='tel'
        minLength={10}
        maxLength={17}
        helperText={formData.errors.phone}
        error={!!formData.errors.phone}
      />
      <Textarea
        fullWidth
        label='Project details'
        placeholder='Brief about your project'
        value={formData.message}
        required
        error={!!formData.errors.message}
        helperText={formData.errors.message}
        rootClasseName='md:col-span-2'
        rows={3}
        onChange={(e) => onChangeFormData({ message: e.target.value })}
      />
    </div>
    <div className='flex items-center justify-end mt-[40px]'>
      <Button
        variant='default'
        type='submit'
        className='md:w-[239px] w-full mr-[inherit] gap-2'
      >
        Submit
        {<Arrow />}
      </Button>
    </div>
  </form>
);

export default Form;

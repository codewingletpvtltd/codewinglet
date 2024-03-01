import { FC } from 'react';
import { Typography } from '@codewinglet/components';
import Textarea from '../../../../components/Textarea';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import { FormProps } from '../types';

const Form: FC<FormProps> = ({ formData, onChangeFormData, onSubmit }) => (
  <form onSubmit={onSubmit} className='col-span-1'>
    <div className=''>
      <TextField
        fullWidth
        label='Full name'
        required
        placeholder='John Williams'
        value={formData.name}
        onChange={(e) => onChangeFormData({ name: e.target.value })}
        helperText={formData.errors.name}
        error={!!formData.errors.name}
      />
      <TextField
        fullWidth
        label='Email'
        placeholder='john@example.com'
        value={formData.email}
        required
        onChange={(e) => onChangeFormData({ email: e.target.value })}
        helperText={formData.errors.email}
        error={!!formData.errors.email}
      />
      <TextField
        fullWidth
        label='Phone number'
        placeholder='+91 89563 43223'
        value={formData.phone}
        onChange={(e) => onChangeFormData({ phone: e.target.value })}
        type='tel'
        maxLength={10}
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
    <div className='flex items-center justify-center mt-[40px]'>
      <Typography className='text-dropdownText text-[14px] font-300 mr-5'>
        By clicking submit button of form, you agree to our{' '}
        <span className='text-primary font-400'>Privacy policy.</span>
      </Typography>
      <Button type='submit' className='bg-primary w-[239px] mr-[inherit]'>
        Submit
      </Button>
    </div>
  </form>
);

export default Form;

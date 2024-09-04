/* eslint-disable import/order */
import { Arrow } from '@codewinglet/assets';
import { FC, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import Textarea from '../../../../components/Textarea';
import { FormProps } from '../types';

const Form: FC<FormProps> = ({ formData, onChangeFormData, onSubmit }) => {
  const [phone, setPhone] = useState('');
  return (
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
        />
        <div className='flex flex-col mb-[30px]'>
          <label className='text-primary sm:text-paragraph1 text-tag mb-2.5 block'>
            Phone number
          </label>
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={(value: string) => {
              onChangeFormData({ phone: value });
            }}
            placeholder='Enter your number'
            inputClass='!bg-transparent !border-0 !border-b !border-secondary !rounded-none !w-full sm:!text-paragraph1ExtraLight !text-tag'
            buttonClass='!border-0 !border-b !border-secondary !bg-transparent'
          />
        </div>
        {/* <TextField
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
        /> */}
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
      <div className='flex items-center justify-end mt-10'>
        <Button
          variant='default'
          type='submit'
          className='md:w-[239px] w-full mr-[inherit] gap-2'
        >
          Submit
          <Arrow />
        </Button>
      </div>
    </form>
  );
};
export default Form;

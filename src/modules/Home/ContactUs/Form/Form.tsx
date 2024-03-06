import { FC } from 'react';
import Image from 'next/image';
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
        onChange={(e) => {
          const phoneNumber = e.target.value;
          const phoneRegex = /^\+?[0-9()\- ]*$/;
          if (
            phoneRegex.test(phoneNumber) ||
            phoneNumber === '' ||
            phoneNumber.length <= 17
          ) {
            onChangeFormData({ phone: phoneNumber });
          }
        }}
        type='tel'
        minLength={10}
        maxLength={17}
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
      <Button type='submit' className='bg-primary w-[239px] mr-[inherit]'>
        Submit{' '}
        <Image
          src={'/assets/icons/Arrow.svg'}
          alt='Arrow'
          width={16}
          height={16}
          className='ml-2'
        />
      </Button>
    </div>
  </form>
);

export default Form;

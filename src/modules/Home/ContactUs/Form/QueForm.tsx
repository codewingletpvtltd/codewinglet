import { FC } from 'react';
import { Arrow } from '@codewinglet/assets';
import Textarea from '../../../../components/Textarea';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import { FormProps } from '../types';

const QueForm: FC<FormProps> = ({ formData, onChangeFormData, onSubmit }) => (
  <form onSubmit={onSubmit} className='col-span-1'>
    <div className=''>
      <TextField
        fullWidth
        label='Email'
        placeholder='Write your email'
        value={formData.email}
        required
        onChange={(e) => onChangeFormData({ email: e.target.value })}
        helperText={formData.errors.email}
        error={!!formData.errors.email}
      />

      <Textarea
        fullWidth
        label='Question'
        placeholder='Write your question briefly here'
        value={formData.message}
        required
        error={!!formData.errors.message}
        helperText={formData.errors.message}
        rootClasseName='md:col-span-2'
        rows={3}
        onChange={(e) => onChangeFormData({ message: e.target.value })}
      />
    </div>
    <div className='flex items-center justify-start mt-[40px]'>
      <Button
        variant='blackOutline'
        type='submit'
        className='md:w-[180px] w-full mr-[inherit] gap-2'
      >
        Submit
        <Arrow />
      </Button>
    </div>
  </form>
);

export default QueForm;

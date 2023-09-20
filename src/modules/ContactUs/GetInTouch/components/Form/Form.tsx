import { FC } from 'react';
import Textarea from '../../../../../components/Textarea';
import Button from '../../../../../components/Button';
import TextField from '../../../../../components/TextField';
import { FormProps } from '../../types';

const Form: FC<FormProps> = ({
  formData,
  onChangeFormData,
  onSubmit,
  isDisabled,
}) => (
  <form onSubmit={onSubmit} className='col-span-2'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
      <TextField
        fullWidth
        label='Name'
        required
        placeholder='Name'
        value={formData.name}
        onChange={(e) => onChangeFormData({ name: e.target.value })}
        helperText={formData.errors.name}
        error={!!formData.errors.name}
      />
      <TextField
        fullWidth
        label='Email'
        placeholder='Email'
        value={formData.email}
        required
        onChange={(e) => onChangeFormData({ email: e.target.value })}
        helperText={formData.errors.email}
        error={!!formData.errors.email}
      />
      <TextField
        fullWidth
        label='Phone'
        placeholder='Phone'
        value={formData.phone}
        onChange={(e) => onChangeFormData({ phone: e.target.value })}
      />
      <TextField
        fullWidth
        label='What service are you looking for?'
        placeholder='Web Design, Web Development'
        value={formData.service}
        onChange={(e) => onChangeFormData({ service: e.target.value })}
      />
      <Textarea
        fullWidth
        label='Message'
        placeholder='Your Message'
        value={formData.message}
        required
        error={!!formData.errors.message}
        helperText={formData.errors.message}
        rootClasseName='md:col-span-2'
        rows={10}
        onChange={(e) => onChangeFormData({ message: e.target.value })}
      />
    </div>
    <div className='flex items-center justify-center mt-[40px]'>
      <Button type='submit' disabled={isDisabled}>
        Submit
      </Button>
    </div>
  </form>
);

export default Form;

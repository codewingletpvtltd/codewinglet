import { FC } from 'react';
import Button from '../../../../components/Button';
import TextField from '../../../../components/TextField';
import { FormProps } from '../types';

const Form: FC<FormProps> = ({
  formData,
  onChangeFormData,
  onSubmit,
  isDisabled,
}) => {
  const isNum = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    if (
      evt.key === 'Backspace' ||
      evt.key === 'Delete' ||
      evt.key.startsWith('Arrow')
    ) {
      return;
    }

    if (/^\d$/.test(evt.key)) {
      return;
    }
    evt.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className='col-span-2'>
      <div className=''>
        <TextField
          fullWidth
          required
          placeholder='Name'
          value={formData.name}
          onChange={(e) => onChangeFormData({ name: e.target.value })}
          helperText={formData.errors.name}
          error={!!formData.errors.name}
          className='block mb-[20px] border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
        />
        <TextField
          fullWidth
          placeholder='Email'
          value={formData.email}
          required
          onChange={(e) => onChangeFormData({ email: e.target.value })}
          helperText={formData.errors.email}
          error={!!formData.errors.email}
          className='block mb-[20px] border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
        />
        <TextField
          fullWidth
          onKeyDown={(evt) => isNum(evt)}
          type='tel'
          maxLength={10}
          placeholder='Phone'
          value={formData.phone}
          onChange={(e) => onChangeFormData({ phone: e.target.value })}
          className='block mb-[20px] border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
        />
        <TextField
          fullWidth
          placeholder='Web Design, Web Development'
          value={formData.service}
          onChange={(e) => onChangeFormData({ service: e.target.value })}
          className='block mb-[20px] border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
        />
      </div>

      <Button
        type='submit'
        disabled={isDisabled}
        className='bg-black  px-[30px] text-white text-[16px] border border-solid border-black table w-full font-600 cursor-pointer hover:bg-white hover:text-primary hover:transition-all hover:duration-[0'
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;

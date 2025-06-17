import React, { useId } from 'react';

import { getClassNames } from '@codewinglet/utils';

import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({
  label,
  error = false,
  type = 'text',
  labelClassName = '',
  helperText,
  disabled,
  fullWidth,
  required,

  ...rest
}) => {
  const inputId = useId();

  return (
    <div className='flex flex-col mb-[30px]'>
      {label && (
        <label
          htmlFor={rest.id || inputId}
          className={getClassNames(
            'text-gray-800 sm:text-paragraph1 text-tag mb-2.5',
            error ? 'text-gray-800' : '',
            labelClassName
          )}
        >
          {label}
          {required && <span className='text-error'>*</span>}
        </label>
      )}
      <div className='inline-block'>
        <input
          id={rest.id || inputId}
          type={type}
          autoComplete='off'
          disabled={disabled}
          className={getClassNames(
            'rounded-none border-solid h-10 w-[200px] sm:text-paragraph1ExtraLight text-tag bg-transparent placeholder:text-gray-200 focus:outline-none focus:border-gray-800 ',
            error ? 'border-error border-b' : 'border-b border-gray-400 ',
            disabled ? 'pointer-events-none bg-gray-400' : '',
            fullWidth ? 'w-full' : ''
          )}
          {...rest}
        />
      </div>
      {helperText && (
        <div
          className={getClassNames('text-tagLight', error ? 'text-error' : '')}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default TextField;

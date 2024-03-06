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
    <div className='flex flex-col'>
      {label && (
        <label
          htmlFor={rest.id || inputId}
          className={getClassNames(
            'font-primary sm:text-paragraph1 text-tag mb-[10px] mt-[30px]',
            error ? 'text-error' : '',
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
          disabled={disabled}
          className={getClassNames(
            'border-solid border-b border-dropdownText h-[40px] w-[200px] sm:text-paragraph1 text-tag bg-transparent placeholder:text-placeholderText focus:outline-none focus:border-primary ',
            error ? 'border-error' : 'border-dropdownText',
            disabled ? 'pointer-events-none bg-dropdownText' : '',
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

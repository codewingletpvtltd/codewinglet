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
            'text-primary sm:text-paragraph1 text-tag mb-[10px]',
            error ? 'text-primary' : '',
            labelClassName
          )}
        >
          {label}
          {required && (
            <span
              className={getClassNames(
                '',
                error ? 'text-error' : 'text-primary'
              )}
            >
              *
            </span>
          )}
        </label>
      )}
      <div className='inline-block'>
        <input
          id={rest.id || inputId}
          type={type}
          autoComplete='off'
          disabled={disabled}
          className={getClassNames(
            'rounded-none border-solid h-[40px] w-[200px] sm:text-paragraph1ExtraLight text-tag bg-transparent placeholder:text-placeholderText focus:outline-none focus:border-primary ',
            error ? 'border-error border-b' : 'border-b border-secondary ',
            disabled ? 'pointer-events-none bg-secondary' : '',
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

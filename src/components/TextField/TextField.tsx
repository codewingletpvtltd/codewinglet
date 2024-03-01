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
            'font-secondary text-subtitle1 font-400 mb-[15px]',
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
            'border-solid border-b border-dropdownText h-[40px] w-[200px] text-subtitle2 bg-transparent placeholder:text-placeholderText font-400 focus:outline-none focus:border-primary  mb-[30px]',
            error ? 'border-error' : 'border-dropdownText',
            disabled ? 'pointer-events-none bg-dropdownText' : '',
            fullWidth ? 'w-full' : ''
          )}
          {...rest}
        />
      </div>
      {helperText && (
        <div
          className={getClassNames('text-[12px]', error ? 'text-error' : '')}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default React.memo(TextField);

import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({
  label,
  error = false,
  type = 'text',
  className = '',
  labelClassName = '',
  helperText,
  disabled,
  fullWidth,
  ...rest
}) => {
  const inputId =
    rest.id || `textfield-${Math.random().toString(36).substring(7)}`;

  return (
    <div className='TextField-root flex flex-col h-40'>
      {label && (
        <label
          htmlFor={inputId}
          className={getClassNames(
            'font-secondary text-subtitle1 font-800',
            error ? 'text-error' : '',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <div className='inline-block'>
        <input
          id={inputId}
          type={type}
          disabled={disabled}
          className={getClassNames(
            'Input-root border-solid border h-[40px] px-[13px] rounded-10 w-[200px] text-subtitle2 font-400 focus:outline-none focus:border-primary',
            error ? 'border-error' : 'border-gray',
            disabled ? 'pointer-events-none bg-gray' : '',
            fullWidth ? 'w-full' : '',
            className
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

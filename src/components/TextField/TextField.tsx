import React, { useId } from 'react';
import { getClassNames } from '../../utils';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({
  label,
  error = false,
  type = 'text',
  labelClassName = '',
  helperText,
  disabled,
  fullWidth,
  ...rest
}) => {
  const inputId = useId();

  return (
    <div className='flex flex-col h-40'>
      {label && (
        <label
          htmlFor={rest.id || inputId}
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
          id={rest.id || inputId}
          type={type}
          disabled={disabled}
          className={getClassNames(
            'border-solid border h-[40px] px-[13px] rounded-10 w-[200px] text-subtitle2 font-400 focus:outline-none focus:border-primary',
            error ? 'border-error' : 'border-gray',
            disabled ? 'pointer-events-none bg-gray' : '',
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

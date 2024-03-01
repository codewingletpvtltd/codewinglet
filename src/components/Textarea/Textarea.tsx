import React, { useId } from 'react';

import { getClassNames } from '@codewinglet/utils';
import { TextareaProps } from './types';

const Textarea: React.FC<TextareaProps> = ({
  label,
  error = false,
  labelClassName = '',
  helperText,
  disabled,
  fullWidth,
  rootClasseName = '',
  required,
  ...rest
}) => {
  const inputId = useId();

  return (
    <div className={getClassNames('flex flex-col', rootClasseName)}>
      {label && (
        <label
          htmlFor={rest.id || inputId}
          className={getClassNames(
            'font-secondary text-subtitle1 font-400 mb-[15px] ',
            error ? 'text-error' : '',
            labelClassName
          )}
        >
          {label}
          {required && <span className='text-error'>*</span>}
        </label>
      )}
      <div className='inline-block'>
        <textarea
          id={rest.id || inputId}
          disabled={disabled}
          className={getClassNames(
            'border-solid border-b border-dropdownText placeholder:text-placeholderText bg-transparent  pt-[10px] w-[200px] text-subtitle2 font-400 focus:outline-none focus:border-primary',
            error ? 'border-error' : 'border-gray',
            disabled ? 'pointer-events-none bg-gray' : '',
            fullWidth ? 'w-full' : ''
          )}
          rows={2}
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

export default React.memo(Textarea);

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
            'text-primary sm:text-paragraph1 text-tag mb-2.5',
            error ? 'text-primary' : '',
            labelClassName
          )}
        >
          {label}
          {required && <span className='text-error'>*</span>}
        </label>
      )}
      <div className='inline-block'>
        <textarea
          autoComplete='off'
          id={rest.id || inputId}
          disabled={disabled}
          className={getClassNames(
            'rounded-none border-solid  placeholder:text-placeholderText bg-transparent pt-2.5 w-[200px] sm:text-paragraph1ExtraLight text-tag focus:outline-none focus:border-primary',
            error ? 'border-error border-b' : 'border-b border-secondary ',
            disabled ? 'pointer-events-none bg-gray' : '',
            fullWidth ? 'w-full' : ''
          )}
          rows={2}
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

export default Textarea;

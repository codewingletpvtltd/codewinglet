import React, { useId } from 'react';

import { getClassNames } from '@codewinglet/utils/cn';
import { TextareaProps } from './types';

const Textarea: React.FC<TextareaProps> = ({
  label,
  error = false,
  labelClassName = '',
  helperText,
  disabled,
  fullWidth,
  ...rest
}) => {
  const inputId = useId();

  return (
    <div className='flex flex-col'>
      {label && (
        <label
          htmlFor={rest.id || inputId}
          className={getClassNames(
            'font-secondary text-subtitle1 font-600 mb-[13px]',
            error ? 'text-error' : '',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <div className='inline-block'>
        <textarea
          id={rest.id || inputId}
          disabled={disabled}
          className={getClassNames(
            'border-solid border px-[13px] pt-[10px] rounded-10 w-[200px] text-subtitle2 font-400 focus:outline-none focus:border-primary',
            error ? 'border-error' : 'border-gray',
            disabled ? 'pointer-events-none bg-gray' : '',
            fullWidth ? 'w-full' : ''
          )}
          rows={3}
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

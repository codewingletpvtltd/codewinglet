import React, { forwardRef } from 'react';

import { getClassNames } from '@codewinglet/utils';

import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = forwardRef(
  ({ variant = '', className = '', children, ...rest }, ref) => {
    switch (variant) {
      case 'h1':
        return (
          <h1
            className={getClassNames('text-h1 font-secondary', className)}
            ref={ref}
            {...rest}
          >
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2
            className={getClassNames('text-h2 font-secondary', className)}
            ref={ref}
            {...rest}
          >
            {children}
          </h2>
        );
      case 'h3':
        return (
          <h3
            className={getClassNames('text-h3 font-secondary', className)}
            ref={ref}
            {...rest}
          >
            {children}
          </h3>
        );
      case 'h4':
        return (
          <h4
            className={getClassNames('text-h4 font-secondary', className)}
            ref={ref}
            {...rest}
          >
            {children}
          </h4>
        );
      case 'h5':
        return (
          <h5
            className={getClassNames('text-h5 font-secondary', className)}
            ref={ref}
            {...rest}
          >
            {children}
          </h5>
        );
      case 'h6':
        return (
          <h6
            className={getClassNames('text-h6 font-secondary', className)}
            ref={ref}
            {...rest}
          >
            {children}
          </h6>
        );
      case 'body1':
        return (
          <p
            ref={ref}
            className={getClassNames('text-body1 h-body1', className)}
            {...rest}
          >
            {children}
          </p>
        );
      case 'body2':
        return (
          <p
            ref={ref}
            className={getClassNames('text-body2 h-body2', className)}
            {...rest}
          >
            {children}
          </p>
        );
      case 'subtitle1':
        return (
          <p
            ref={ref}
            className={getClassNames(
              'text-subtitle1 min-h-subtitle1',
              className
            )}
            {...rest}
          >
            {children}
          </p>
        );
      case 'subtitle2':
        return (
          <p
            ref={ref}
            className={getClassNames(
              'text-subtitle2 min-h-subtitle2',
              className
            )}
            {...rest}
          >
            {children}
          </p>
        );
      default:
        return (
          <p
            ref={ref}
            className={getClassNames('min-h-6', className)}
            {...rest}
          >
            {children}
          </p>
        );
    }
  }
);

Typography.displayName = 'Typography';

export default Typography;

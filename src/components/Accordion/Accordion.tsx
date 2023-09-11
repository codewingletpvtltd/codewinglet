'use client';
import { FC } from 'react';
import { getClassNames } from '@codewinglet/utils/cn';
import { Summary } from './components';
import { AccordionProps } from './types';
import { AccordionContext } from './context/AccordionContext';

const Accordion: FC<AccordionProps> = ({
  title,
  info,
  expanded,
  onChange,
  children,
  onApplyNow,
  contentClassName = '',
  titleClassName = '',
  headerClassName = '',
  rightIcon,
  variant,
  onTitleClick,
}) => {
  const isSecondary = variant === 'secondary';
  return (
    <AccordionContext.Provider
      value={{
        title,
        info,
        expanded,
        onChange,
        onApplyNow,
        isSecondary,
        titleClassName,
        headerClassName,
        rightIcon,
        onTitleClick,
      }}
    >
      <div
        className={getClassNames(
          isSecondary ? '' : 'rounded-10 shadow-lg px-[12px] py-[14px]'
        )}
      >
        <Summary />
        <div
          className={getClassNames(
            'transition-[max-height] overflow-hidden duration-[400] ease-linear overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300',
            expanded
              ? 'max-h-[800px] md:max-h-[700px] lg:max-h-[600px]'
              : 'max-h-0',
            expanded
              ? isSecondary
                ? 'pt-[22px]'
                : 'mt-[17px] pt-[25px] border-t border-t-lightBlack'
              : ''
          )}
        >
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;

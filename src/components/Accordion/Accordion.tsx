'use client';
import { FC } from 'react';
import { getClassNames } from '@codewinglet/utils';
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
  variant,
}) => {
  const isSecondary = variant === 'secondary';
  return (
    <AccordionContext.Provider
      value={{ title, info, expanded, onChange, onApplyNow, isSecondary }}
    >
      <div
        className={getClassNames(
          isSecondary ? '' : 'rounded-10 shadow-lg px-[12px] py-[14px]'
        )}
      >
        <Summary />
        <div
          className={getClassNames(
            'transition-[max-height] overflow-hidden duration-[400ms] ease-linear',
            expanded
              ? isSecondary
                ? 'max-h-[500px] md:max-h-[400px] lg:max-h-[300px]'
                : 'max-h-[5000px] md:max-h-[4000px] lg:max-h-[3000px]'
              : 'max-h-0'
          )}
        >
          <div
            className={getClassNames(
              isSecondary
                ? 'pt-[22px]'
                : 'mt-[17px] pt-[25px] border-t border-t-lightBlack',
              contentClassName
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;

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
}) => (
  <AccordionContext.Provider
    value={{ title, info, expanded, onChange, onApplyNow }}
  >
    <div className='rounded-10 shadow-lg px-[12px] py-[14px]'>
      <Summary />
      <div
        className={getClassNames(
          'transition-[max-height] overflow-hidden duration-[400ms] ease-linear',
          expanded ? 'max-h-[4000px]' : 'max-h-0'
        )}
      >
        <div
          className={getClassNames(
            'mt-[17px] pt-[25px] border-t border-t-lightBlack',
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  </AccordionContext.Provider>
);

export default Accordion;

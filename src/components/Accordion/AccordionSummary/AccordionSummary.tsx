'use client';
import { useContext } from 'react';
import { MinusIcon, PlusIcon } from '@codewinglet/assets';
import AccordionContext from '../AccordionContext';
import { AccordionSummaryProps } from './types';

const AccordionSummary: React.FC<AccordionSummaryProps> = ({
  children,
  id,
  className,
  expandedIcon = <MinusIcon aria-label='accordion-expandedIcon' />,
  closedIcon = <PlusIcon aria-label='accordion-closedIcon' />,
  iconPosition = 'end',
}) => {
  const { activePanelId, clickHandler, expandIconsHidden } =
    useContext(AccordionContext);
  const active = id === activePanelId;

  const iconElement = (
    <span
      onClick={(event) => {
        event.stopPropagation();
        clickHandler(id);
      }}
    >
      {active ? expandedIcon : closedIcon}
    </span>
  );

  return (
    <div
      className={
        'Accordion-summary-root cursor-pointer px-4 py-2 mt-1 block w-full text-left'
      }
    >
      {expandIconsHidden ? (
        <div className={`flex justify-start items-start ${className}`}>
          {children}
        </div>
      ) : (
        <div className={`flex items-center justify-between ${className}`}>
          <div className='flex items-center gap-4'>
            {iconPosition === 'start' && iconElement}
            {children}
          </div>
          {iconPosition === 'end' && iconElement}
        </div>
      )}
    </div>
  );
};
export default AccordionSummary;

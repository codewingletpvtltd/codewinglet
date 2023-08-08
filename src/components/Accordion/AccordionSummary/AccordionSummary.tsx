import { useContext } from 'react';
import { MinusIcon } from '../../../assets/MinusIcon';
import { PlusIcon } from '../../../assets/PlusIcon';
import AccordionContext from '../AccordionContext';
import { AccordionSummaryProps } from './types';

const AccordionSummary: React.FC<AccordionSummaryProps> = ({
  children,
  id,
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
      className='Accordion-summary-root cursor-pointer px-4 py-2 mt-1 block w-full text-left
        bg-gray-200'
    >
      {expandIconsHidden ? (
        <div className='flex justify-start items-start'>{children}</div>
      ) : (
        <div className='flex items-center justify-between'>
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

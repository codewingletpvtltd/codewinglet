import { useContext } from 'react';
import { getClassNames } from '@codewinglet/utils';
import AccordionContext from '../AccordionContext';
import { AccordionDetailsProps } from './types';

const AccordionDetails: React.FC<AccordionDetailsProps> = ({
  children,
  className = '',
  id,
}) => {
  const { activePanelId, expandIconsHidden } = useContext(AccordionContext);
  const active = id === activePanelId;

  return (
    <div
      className={getClassNames(
        `Accordion-details overflow-hidden transition duration-700 ease-in-out ${
          active || expandIconsHidden ? 'opacity-100 h-auto' : 'opacity-0 h-0'
        } ${className}`
      )}
    >
      <div className='Accordion-details-box px-4 py-2 my-2 flex gap-20'>
        {children}
      </div>
    </div>
  );
};
export default AccordionDetails;

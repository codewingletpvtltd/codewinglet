import { DownArrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';
import Button from '../../../Button';
import Typography from '../../../Typography';
import { useAccordionContext } from '../../context/AccordionContext';
import SummaryInfo from '../SummaryInfo';
import { Info } from '../../types';

const Heading = () => {
  const accordionContext = useAccordionContext();
  const { title, info, expanded, onChange, onApplyNow } =
    accordionContext || {};
  return (
    <div
      className={getClassNames(
        'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-[8px]'
      )}
    >
      <div className='md:col-span-2 lg:col-span-3 2xl:col-span-5'>
        <Typography
          variant='body2'
          className='font-[800] md:text-[22px] lg:text-[25px]'
        >
          {title}
        </Typography>
        <div className='flex row'>
          {info &&
            info.map((data: Info, index: number) => (
              <div
                key={`Heading-${data.title}-${index}`}
                className='flex flex-row'
              >
                <SummaryInfo title={data.title} value={data.value} />
                {info.length - 1 !== index && (
                  <div className='bg-lightBlack mx-[12px] h-[21px] w-[1px] mt-[2px]' />
                )}
              </div>
            ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <Button onClick={onApplyNow}>Apply Now</Button>
        <div
          className={getClassNames(
            'h-[26px] w-[26px] md:h-[35px] md:w-[35px] lg:h-[39px] lg:w-[39px] rounded-[50%] bg-primary flex items-center justify-center',
            expanded ? '' : 'pt-[2px]'
          )}
          onClick={onChange}
        >
          <DownArrow
            className={getClassNames(
              'transition duration-[400ms] ease-linear',
              expanded ? 'rotate-[180deg]' : ''
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;

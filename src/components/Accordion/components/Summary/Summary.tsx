import { DownArrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';
import Button from '../../../Button';
import Typography from '../../../Typography';
import { useAccordionContext } from '../../context/AccordionContext';
import SummaryInfo from '../SummaryInfo';
import { Info } from '../../types';

const Heading = () => {
  const accordionContext = useAccordionContext();
  const { title, info, expanded, onChange } = accordionContext || {};
  return (
    <div className={getClassNames('grid grid-cols-1 md:grid-cols-7 gap-[8px]')}>
      <div className='md:col-span-6'>
        <Typography variant='body2' className='font-[800]'>
          {title}
        </Typography>
        <div className='flex row'>
          {info &&
            info.map((data: Info, index: number) => (
              <>
                <SummaryInfo
                  key={`Heading-${data.title}-${index}`}
                  title={data.title}
                  value={data.value}
                />
                {info.length - 1 !== index && (
                  <Typography
                    variant='subtitle2'
                    className='text-lightBlack mx-[12px]'
                  >
                    |
                  </Typography>
                )}
              </>
            ))}
        </div>
      </div>
      <div className='flex row items-center justify-between'>
        <Button>Apply Now</Button>
        <div
          className={getClassNames(
            'h-[26px] w-[26px] rounded-full bg-primary flex items-center justify-center',
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

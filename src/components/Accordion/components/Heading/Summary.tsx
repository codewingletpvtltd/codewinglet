import { DownArrow } from '@codewinglet/assets';
import Button from '../../../Button';
import Typography from '../../../Typography';
import { useAccordionContext } from '../../context/AccordionContext';
import HeadingInfo from '../SummaryInfo';
import { Info } from '../../types';

const Heading = () => {
  const accordionContext = useAccordionContext();
  const { title, info } = accordionContext || {};
  return (
    <div className='grid grid-cols-1 md:grid-cols-7 gap-[8px] border-b border-b-lightBlack pb-[15px]'>
      <div className='md:col-span-6'>
        <Typography variant='body2' className='font-[800]'>
          {title}
        </Typography>
        <div className='flex row'>
          {info &&
            info.map((data: Info, index: number) => (
              <>
                <HeadingInfo
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
        <div className='h-[26px] w-[26px] pt-[2px] rounded-full bg-primary flex items-center justify-center'>
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default Heading;

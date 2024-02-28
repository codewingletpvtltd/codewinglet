import { memo } from 'react';
import Image from 'next/image';
import { getClassNames } from '@codewinglet/utils';
import Button from '../../../Button';
import Typography from '../../../Typography';
import { useAccordionContext } from '../../context/AccordionContext';
import SummaryInfo from '../SummaryInfo';
import { Info } from '../../types';

const Summary = () => {
  const accordionContext = useAccordionContext();
  const {
    title,
    info,
    expanded,
    onChange,
    onApplyNow,
    isSecondary,
    titleClassName = '',
    headerClassName = '',
    rightIcon,
    onTitleClick,
  } = accordionContext || {};
  return (
    <div
      className={getClassNames(
        'grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-[8px]',
        isSecondary
          ? 'grid-cols-3 pb-[22px] border-b border-b-lightBlack'
          : 'grid-cols-1',
        headerClassName
      )}
    >
      <div
        className={getClassNames(
          'md:col-span-2 lg:col-span-3 2xl:col-span-5',
          isSecondary ? 'col-span-2' : ''
        )}
        onClick={onTitleClick}
      >
        <Typography
          variant='body2'
          className={getClassNames(
            'font-[800] md:text-[22px] lg:text-[25px]',
            titleClassName
          )}
        >
          {title}
        </Typography>
        {info && (
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
        )}
      </div>
      {rightIcon ? (
        rightIcon
      ) : isSecondary ? (
        <div className='flex items-center justify-end'>
          {expanded ? (
            <Image
              className='hover:cursor-pointer'
              src='/assets/icons/MinusIcon.svg'
              alt='MinusIcon'
              width={50}
              height={50}
            />
          ) : (
            <Image
              className='hover:cursor-pointer'
              src='/assets/icons/PlusIcon.svg'
              alt='PlusIcon'
              width={50}
              height={50}
            />
          )}
        </div>
      ) : (
        <div className='flex flex-row items-center justify-between'>
          <Button onClick={onApplyNow}>Apply Now</Button>
          <div
            className={getClassNames(
              'h-[26px] w-[26px] md:h-[35px] md:w-[35px] lg:h-[39px] lg:w-[39px] rounded-[50%] bg-primary flex items-center justify-center',
              expanded ? '' : 'pt-[2px]'
            )}
            onClick={onChange}
          >
            <Image
              className={getClassNames(
                'transitio duration-400 ease-linear',
                expanded ? 'rotate-[180deg]' : ''
              )}
              src='/assets/icons/DownArrow.svg'
              alt='DownArrow'
              width={50}
              height={50}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Summary);

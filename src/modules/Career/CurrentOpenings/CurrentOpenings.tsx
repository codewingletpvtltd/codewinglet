'use client';
import { HighlightArrow } from '@codewinglet/assets';
import Accordion from '../../../components/Accordion/Accordion';
import SectionHeader from '../../../components/SectionHeader';
import Typography from '../../../components/Typography/Typography';
import CareerApplyNow from '../CareerApplyNow';
import { openings } from './constants';
import useCurrentOpenings from './useCurrentOpenings';

const CurrentOpenings = () => {
  const { expanded, showModal, setShowModal, onChangeAccordion } =
    useCurrentOpenings();

  return (
    <>
      <div className='max-w-screen-xl mx-[20px] my-[50px] md:mx-[38px] xl:mx-auto'>
        <SectionHeader
          title={
            <>
              <strong className='font-[800]'>Current</strong> Openings
            </>
          }
          headingClassName='text-center'
        />
        <div className='flex flex-col gap-[20px] md:gap-[30px]'>
          {openings.map((data, index) => (
            <Accordion
              key={`openings-${data.id}-${index}`}
              title={data.title}
              info={data.info}
              expanded={expanded === index}
              onChange={onChangeAccordion(index)}
              contentClassName='[&>:not(:first-child)]:mt-[26px]'
              onApplyNow={() => setShowModal(true)}
            >
              {data.content &&
                data.content.map((content, cindex) => (
                  <div key={`content-${data.id}-${index}-${cindex}`}>
                    <Typography
                      variant='body2'
                      className='font-[800] md:text-[22px] lg:text-[25px] mb-[8px] md:mb-[15px] lg:mb-[18px]'
                    >
                       {content.title}
                    </Typography>
                    {Array.isArray(content.desc) ? (
                      <div className='grid grid-flow-row gap-[10px]'>
                        {content.desc.map((cddata, cdindex) => (
                          <div
                            key={`content-${data.id}-${index}-${cindex}-${cdindex}`}
                            className='flex gap-[8px]'
                          >
                            <span>
                              <HighlightArrow className='mt-[4px] h-[16px] w-[9px] md:h-[19px] md:w-[10px] lg:h-[22px] lg:w-[12px]' />
                            </span>
                            <Typography
                              variant='subtitle2'
                              className='md:text-[16px] lg:text-[18px] text-lightBlack'
                            >
                              {cddata}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Typography
                        variant='subtitle2'
                        className='md:text-[16px] lg:text-[18px] text-lightBlack text-justify'
                      >
                        {content.desc}
                      </Typography>
                    )}
                  </div>
                ))}
            </Accordion>
          ))}
        </div>
      </div>
      <CareerApplyNow open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CurrentOpenings;

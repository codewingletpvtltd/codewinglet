'use client';
import { useState } from 'react';
import { HighlightArrow } from '@codewinglet/assets';
import Accordion from '../Accordion/Accordion';
import SectionHeader from '../SectionHeader';
import Typography from '../Typography/Typography';
import { openings } from './constants';

const CurrentOpenings = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <SectionHeader
        title={
          <>
            <strong className='font-[800]'>Current</strong> Openings
          </>
        }
        headingClassName='text-center'
      />
      <div>
        {openings.map((data, index) => (
          <Accordion
            key={`openings-${data.id}-${index}`}
            title={data.title}
            info={data.info}
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
          >
            {data.content &&
              data.content.map((content, cindex) => (
                <div key={`content-${data.id}-${index}-${cindex}`}>
                  <Typography
                    variant='body2'
                    className='font-[800] md:text-[22px] lg:text-[25px]'
                  >
                    {content.title}
                  </Typography>
                  {Array.isArray(content.desc) ? (
                    <div className='grid grid-flow-row gap-[10px]'>
                      {content.desc.map((cddata, cdindex) => (
                        <div
                          key={`content-${data.id}-${index}-${cindex}-${cdindex}`}
                          className='flex row items-center gap-[8px]'
                        >
                          <HighlightArrow />
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
                      className='md:text-[16px] lg:text-[18px] text-lightBlack'
                    >
                      {content.desc}
                    </Typography>
                  )}
                </div>
              ))}
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default CurrentOpenings;

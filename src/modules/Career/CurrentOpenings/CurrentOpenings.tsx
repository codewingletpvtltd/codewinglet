'use client';
import SectionHeader from '../../../components/SectionHeader';
import CareerApplyNow from '../CareerApplyNow';

import useCurrentOpenings from './useCurrentOpenings';

const CurrentOpenings = () => {
  const { showModal, setShowModal } = useCurrentOpenings();

  return (
    <>
      <div className='max-w-screen-xl mx-[20px] my-[50px] md:mx-[38px] xl:mx-auto mt-[150px]'>
        <SectionHeader
          title={
            <>
              <strong className='font-[800]'>Current</strong> Openings
            </>
          }
          headingClassName='text-center'
        />
        <div className='flex flex-col gap-[20px] md:gap-[30px]'></div>
      </div>
      <CareerApplyNow open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CurrentOpenings;

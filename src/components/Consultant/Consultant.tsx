'use client';
import Image from 'next/image';
import { InlineWidget } from 'react-calendly';
import {
  Button,
  Modal,
  SectionHeader,
  Typography,
} from '@codewinglet/components';
import Meeting from '@codewinglet/assets/meeting.svg';
import useConsultant from './useConstultant';

const Consultant = () => {
  const { openModal, toggleModal } = useConsultant();
  return (
    <section className='bg-lightBlue px-5 pt-10 md:py-8 md:px-0'>
      <div className='md:mx-8 max-w-screen-xl xl:mx-auto flex items-center lg:gap-10 sm:flex-row flex-col-reverse'>
        <div>
          <Image
            src={Meeting}
            alt='book meeting image'
            width={300}
            height={300}
          />
        </div>
        <div>
          <SectionHeader
            title={
              <>
                <strong className='font-[800]'>Speak to</strong> an expert?
              </>
            }
            description='Connect with our knowledgeable experts to gain insights that drive success for your business.'
            headingClassName='mb-1'
          />
          <Button
            className='group overflow-hidden relative mt-8  border-2 border-black'
            // TODO: Need to change this
            // startIcon={<Calender color='' />}
            variant='contained'
            onClick={toggleModal}
          >
            <div className='rounded-full absolute inset-0 w-0 bg-white transition-all duration-[250] ease-out group-hover:w-full' />

            <Typography
              className='relative text-white group-hover:text-black'
              variant='body2'
            >
              Book a Meeting
            </Typography>
          </Button>
        </div>
      </div>
      <Modal title='' open={openModal} onClose={toggleModal} showFooter={false}>
        <InlineWidget url='https://calendly.com/pkahar' />
      </Modal>
    </section>
  );
};

export default Consultant;

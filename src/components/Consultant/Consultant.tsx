'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHeader } from '@codewinglet/components';
import Meeting from '@codewinglet/assets/meeting.svg';

const Consultant = () => (
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
              <strong className='font-[800]'>Speak to</strong> an expert
            </>
          }
          description='Connect with our knowledge experts to gain insights that drive success for your business.'
          headingClassName='mb-1'
        />
        <Button className='mt-5' link>
          <Link
            href='https://calendly.com/slapani'
            rel='noopener noreferrer'
            target='_blank'
          >
            Book a Meeting
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default Consultant;

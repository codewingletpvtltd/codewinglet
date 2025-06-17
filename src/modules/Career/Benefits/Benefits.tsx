'use client';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeader, Typography } from '@codewinglet/components';

const workData = [
  {
    image: '/assets/career/flexible.svg',
    title: 'Flexible work hours',
    description:
      'Employees can adjust their work schedules to fit their personal lives, ensuring a better work-life balance.',
  },
  {
    image: '/assets/career/LeaveEncashment.svg',
    title: 'Leave Encashment',
    description:
      'Employees can convert unused paid leave days into monetary compensation.',
  },
  {
    image: '/assets/career/Professional.svg',
    title: 'Professional Development',
    description:
      'Access to online courses and certification programs allows employees to grow their skills.',
  },
  {
    image: '/assets/career/working.svg',
    title: '5 Day a week',
    description:
      'We believe in maintaining a healthy work-life balance, giving you the time to relax and refresh.',
  },
  {
    image: '/assets/career/Friendly.svg',
    title: 'Friendly and stress-free environment',
    description:
      'A supportive workplace where collaboration and well-being are prioritized, helping employees stay relaxed and productive.',
  },
  {
    image: '/assets/career/Employee.svg',
    title: 'Employee engagement activities',
    description:
      'Team-building events, workshops, and social gatherings to foster collaboration and enhance workplace culture.',
  },
];

const Benefits = () => (
  <>
    <div
      className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-32'
      id='perks'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[70px]'>
        {/* Left */}
        <div className='lg:w-[630px]'>
          <SectionHeader
            title={<>Perks & benefits</>}
            description={
              <>
                At Codewinglet, we believe that happy, healthy, and motivated
                employees are the foundation of our success. That’s why we offer
                a comprehensive range of perks and benefits designed to support
                your personal and professional growth. From competitive salaries
                to work-life balance initiatives, we ensure you have everything
                you need to thrive.
              </>
            }
            headingClassName='lg:text-h2'
            descriptionClassName='lg:!text-subtitle2Light md:!text-paragraph1ExtraLight text-gray-400'
          />

          <div className='hidden relative lg:block mt-10'>
            <Link
              href='https://www.google.com/search?q=google+my+business+codewinglet&sca_esv=140e142c45642a77&sca_upv=1&rlz=1C1GCEU_enIN954IN956&sxsrf=ADLYWIK8twRkm95COwC8J2bYLgvfRijrIw%3A1727152551706&ei=p0HyZqDjKpqJ4-EPvd3QkQc&oq=google+my+business+codewinglet&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmdvb2dsZSBteSBidXNpbmVzcyBjb2Rld2luZ2xldCoCCAAyBRAhGKABMgUQIRigAUioa1CKMlivV3ACeAGQAQCYAfgBoAG0I6oBBjAuMjMuM7gBA8gBAPgBAZgCGKACyx3CAgoQABiwAxjWBBhHwgIHECEYoAEYCsICBBAhGBXCAgUQABiABMICCxAAGIAEGJECGIoFwgIIEAAYgAQYsQPCAgYQABgWGB7CAggQABgWGB4YD8ICBxAAGIAEGA3CAggQABgIGA0YHsICChAAGAgYDRgeGA-YAwCIBgGQBgiSBwYyLjIxLjGgB-uGAQ&sclient=gws-wiz-serp#lrd=0xad9b0b986e322e33:0x223c56e331adc03,1,,,,'
              target='_blank'
            >
              <Image
                src={'/assets/ContactUs/google-review.svg'}
                width={171}
                height={83}
                alt='google'
              />
            </Link>
          </div>
        </div>
        {/* Right  */}
        <div className='lg:w-[710px] lg:mt-0 mt-10'>
          <div className='grid grid-cols-2 md:gap-[30px] gap-[15px]'>
            {workData.map((workData, i) => (
              <div className='bg-gray-50 md:p-[30px] p-[13px]' key={i}>
                <Image
                  src={workData.image}
                  alt='Menu Icon'
                  width={32}
                  height={32}
                />
                <Typography className='md:text-paragraph1 text-tag md:pt-4 pt-4 pb-1.5'>
                  {workData.title}
                </Typography>
                <Typography className='md:text-paragraph2Light text-tagExtraLight text-gray-200'>
                  {workData.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Benefits;

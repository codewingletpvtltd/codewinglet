import Link from 'next/link';
import {
  EmailLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  LocationMarkLogo,
  TelePhoneLogo,
  TwitterLogo,
} from '@codewinglet/assets';
import { Logo, Typography } from '@codewinglet/components';

const ContactSection = () => (
  <>
    <div className='flex flex-col w-full gap-4'>
      <div>
        <Logo />
      </div>
      <Typography
        variant='subtitle1'
        className='leading-normal xs:text-subtitle2 sm:text-subtitle1'
      >
        Codewinglet your premier software development squad employing a
        streamlined process ensuring timely project delivery.
      </Typography>
    </div>
    <div className='flex gap-2'>
      <div>
        <LocationMarkLogo />
      </div>
      <Typography
        variant='subtitle1'
        className='leading-normal lg:text-subtitle1 xs:text-subtitle2'
      >
        A901-A905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat, Gujarat
        395009.
      </Typography>
    </div>
    <div className='flex gap-2'>
      <div>
        <TelePhoneLogo />
      </div>
      <Link
        href=''
        className='leading-normal lg:text-subtitle1 xs:text-subtitle2'
      >
        +91 83201 11741
      </Link>
    </div>
    <div className='flex gap-2'>
      <div>
        <EmailLogo />
      </div>
      <div>
        <div>
          <Link
            href=''
            className='leading-normal inline-block lg:text-subtitle1 xs:text-subtitle2'
          >
            hr@codewinglet.com
          </Link>
        </div>
        <div>
          <Link
            href=''
            className='leading-normal inline-block lg:text-subtitle1 xs:text-subtitle2'
          >
            contact@codewinglet.com
          </Link>
        </div>
      </div>
    </div>
    <div className='flex gap-4'>
      <Link
        href=''
        className='border-[1px] border-white py-[6px] px-[10px]  rounded-[50%] cursor-pointer'
      >
        <FacebookLogo />
      </Link>
      <Link
        href=''
        className='border-[1px] border-white py-[6px] px-[8px] rounded-[50%] cursor-pointer'
      >
        <InstagramLogo />
      </Link>
      <Link
        href=''
        className='border-[1px] border-white py-[5px] px-[8px] rounded-[50%] cursor-pointer'
      >
        <LinkedInLogo />
      </Link>
      <Link
        href=''
        className='border-[1px] border-white py-[6px] px-[8px] rounded-[50%] cursor-pointer'
      >
        <TwitterLogo />
      </Link>
    </div>
  </>
);

export default ContactSection;

'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import LogoWhite from '@codewinglet/assets/logo_white.svg';
import FooterBox from '@codewinglet/assets/footer-box.svg';

import './scss/main.css';

import { Typography } from '@codewinglet/components';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from '@codewinglet/assets';
import { companyTermsMenu, serviceMenu, technologyMenu } from './constants';

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <Image src={FooterBox} alt='Footer Box' className='box-bg' />
      <div className='container'>
        <div className='footer_text row'>
          <div className='col-md-3 col-sm-12 links'>
            <Image
              src={LogoWhite}
              alt='Codewinglet White Logo'
              className='w-[191px] xl:w-[252px] cursor-pointer'
              onClick={() => router.push('/')}
              loading='eager'
            />

            <Typography variant='subtitle1' className='footer_des'>
              Codewinglet has proven to be a professional software development
              service provider from the outset. We appreciate their proactive
              approach and ability.
            </Typography>
          </div>
          <div className='col-md-3 col-sm-12 links'>
            <Typography variant='h5'>Services</Typography>
            <div>
              {technologyMenu.map((item) => (
                <div key={item.id}>
                  <Typography className='footer_menu'>
                    {/* <HighlightArrow color={COLORS.white} /> */}
                    <Link className='' href={item.path}>
                      {item.label}
                    </Link>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-3 col-sm-12 links'>
            <Typography variant='h5'>Discover</Typography>
            <div>
              {serviceMenu.map((item) => (
                <div key={item.id}>
                  <Typography className='footer_menu'>
                    <Link className='' href={item.path}>
                      {item.label}
                    </Link>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-3 col-sm-12 links'>
            <Typography variant='h5'>Get in touch</Typography>
            <div>
              <Typography className='footer_menu'>
                <Link href='tel:+918320111741'>+91 83201 11741</Link>
              </Typography>

              <Typography className='footer_menu'>
                <Link href='mailto:jobs@codewinglet.com'>
                  jobs@codewinglet.com
                </Link>
              </Typography>

              <Typography className='footer_menu address'>
                A901-905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat,
                Gujarat 395009.
              </Typography>
            </div>
          </div>
        </div>

        <div className='footer2'>
          <div className='icon'>
            <Link
              className='f_social_bg'
              href='https://www.facebook.com/CodewingletPvtLtd'
              target='_blank'
              aria-label='Facebook'
            >
              <FacebookLogo />
            </Link>
            <Link
              className='f_social_bg'
              href='https://www.instagram.com/codewinglet/'
              target='_blank'
              aria-label='Instagram'
            >
              <InstagramLogo />
            </Link>
            <Link
              className='f_social_bg'
              href='https://in.linkedin.com/company/codewinglet'
              target='_blank'
              aria-label='Linkedin'
            >
              <LinkedInLogo />
            </Link>
            <Link
              className='f_social_bg'
              href='https://twitter.com/codewinglet'
              target='_blank'
              aria-label='Twitter'
            >
              <TwitterLogo />
            </Link>
          </div>
          <Typography className='all-reserved'>
            © {new Date().getFullYear()} All rights reserved. Codewinglet
            Private Limited
          </Typography>
          <ul className='terms'>
            {companyTermsMenu.map((item) => (
              <li key={item.id}>
                <Typography className='terms-text'>
                  <Link href={item.path}>{item.label}</Link>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);

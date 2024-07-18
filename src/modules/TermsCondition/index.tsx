/* eslint-disable import/order */
'use client';
import { SectionHeader, Typography } from '@codewinglet/components';
import Link from 'next/link';
import { useRef } from 'react';
import ScrollHighlightNavbar from './ScrollHighlighNavBar';

const TermsCondition = () => {
  const termsRef = useRef<any>();
  const websiteRef = useRef<any>();
  const propertyRef = useRef<any>();
  const policyRef = useRef<any>();
  const partyRef = useRef<any>();
  const disclaimerRef = useRef<any>();
  const limitationRef = useRef<any>();
  const conditionsRef = useRef<any>();
  const contactRef = useRef<any>();

  const TermsData = [
    {
      title: 'Acceptance of terms',
      id: 'terms',
      ref: termsRef,
    },
    {
      title: 'Use of the Website',
      id: 'website',
      ref: websiteRef,
    },
    {
      title: 'Intellectual Property',
      id: 'property',
      ref: propertyRef,
    },
    {
      title: 'Privacy Policy',
      id: 'policy',
      ref: policyRef,
    },
    {
      title: 'Links to Third-Party Websites',
      id: 'party',
      ref: partyRef,
    },
    {
      title: 'Disclaimer of Warranties',
      id: 'disclaimer',
      ref: disclaimerRef,
    },
    {
      title: 'Limitation of Liability',
      id: 'limitation',
      ref: limitationRef,
    },
    {
      title: 'Changes to Terms and Conditions',
      id: 'conditions',
      ref: conditionsRef,
    },
    {
      title: 'Contact Information',
      id: 'contact',
      ref: contactRef,
    },
  ];

  return (
    <>
      <div className=' bg-bg lg:mt-[86px] md:mt-[66px] mt-[9px] py-[15px] md:py-[30px] lg:fixed lg:top-0 fixed md:top-[90px] top-[130px] w-full z-10'>
        <div className='container w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto'>
          <div>
            <SectionHeader
              title={<>Terms & condition</>}
              headingClassName='lg:!text-h4 md:text-h5 text-subtitle1'
              descriptionClassName='hidden'
            />
          </div>
        </div>
      </div>

      <div className=' bg-white mt-[180px] [scroll-behavior:_smooth;]'>
        <div className='container w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto lg:pt-[50px] md:pt-[110px] pt-[60px] relative pb-1'>
          <div className='lg:flex block gap-[100px] items-start mb-10'>
            <ScrollHighlightNavbar navHeader={TermsData} />
            <div className='2xl:w-[70%] xl:w-[67%] w-full'>
              {/* Acceptance of terms : */}
              <div id='terms' ref={termsRef} className='scroll-mt-56'>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Acceptance of terms :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  You accept responsibility for adhering to and being governed
                  by these Terms & Conditions by visiting and using our website,
                  <span className='text-primary'>codewinglet.com.</span> Please
                  do not use this website if you do not agree to these terms.
                </Typography>
              </div>

              {/* Use of the website : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='website'
                ref={websiteRef}
              >
                <Typography
                  className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'
                  id='types'
                >
                  Use of the website :
                </Typography>
                <ul className='grid gap-[15px] ml-5 my-[25px]'>
                  <li className='text-paragraph1Light list-disc'>
                    License
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      You are given a limited, non-exclusive, and revocable
                      license by Codewinglet to access and use this website for
                      non-commercial, informative purposes.
                    </Typography>
                  </li>
                  <li className='text-paragraph1Light list-disc'>
                    Restricted activities
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      You promise not to do any of the following
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary py-5'>
                      - Breaking any laws or rules that may be relevant.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary'>
                      - Making an effort to access the website or its servers
                      without authorization.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary py-5'>
                      - Use the website for any immoral or unlawful activities.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary'>
                      - Sending malware or malicious code.
                    </Typography>
                  </li>
                </ul>
              </div>

              {/* Intellectual Property : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='property'
                ref={propertyRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Intellectual Property :
                </Typography>
                <ul className='grid gap-[15px] ml-5 my-[25px]'>
                  <li className='text-paragraph1Light list-disc'>
                    Copyright
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Copyright laws defend all content on the website, which
                      includes text, graphics, logos, and software, as it
                      belongs to Codewinglet.
                    </Typography>
                  </li>
                  <li className='text-paragraph1Light list-disc'>
                    Trademarks
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Any trademarks or logos that appear on this website belong
                      to Codewinglet or the relevant owners.
                    </Typography>
                  </li>
                </ul>
              </div>

              {/* Privacy policy : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='policy'
                ref={policyRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Privacy policy :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  Your use of the Website is also governed by our&nbsp;
                  <Link
                    href='privacy-policy'
                    className='underline text-primary'
                  >
                    Privacy Policy.
                  </Link>
                </Typography>
              </div>

              {/* Links to third-party websites : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='party'
                ref={partyRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Links to third-party websites :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  Links to external websites may be found on the website. The
                  information or policies on these websites are not within the
                  control of Codewinglet. It is at your own risk that you use
                  them.
                </Typography>
              </div>

              {/* Disclaimer of warranties : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='disclaimer'
                ref={disclaimerRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Disclaimer of warranties :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  Without making any promises of any kind, including but not
                  limited to the implied warranties of merchantability,
                  suitability for a specific purpose, or non-infringement, the
                  Website is given "as is" and "as available".
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  The correctness, comprehensiveness, or dependability of any
                  information on the website is not guaranteed by Codewinglet.
                </Typography>
              </div>

              {/* Limitation of liability : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='limitation'
                ref={limitationRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Limitation of liability :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  Codewinglet disclaims all liability for any damages, whether
                  direct, indirect, special, incidental, or consequential,
                  resulting from or related to your use of or inability to
                  utilize the website.
                </Typography>
              </div>

              {/* Changes to terms and conditions : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px]'
                id='conditions'
                ref={conditionsRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Changes to terms and conditions :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  Codewinglet maintains the right to change these guidelines at
                  any moment. It is your duty to periodically check for updates.
                </Typography>
              </div>

              {/* Contact information : */}
              <div
                className='lg:mt-[50px] scroll-mt-56 mt-[30px] mb-[100px]'
                id='contact'
                ref={contactRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Contact information :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>

              

                  Please email us at{' '}

                  <Link
                    href='mailto:info@codewinglet.com'
                    className='text-primary font-semibold'
                  >
                    info@codewinglet.com

                  </Link>
                  &nbsp; with any queries or worries you may have regarding
                  these terms and conditions.

                  </Link>{' '}
                  with any queries or worries you may have regarding these terms
                  and conditions.

                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;

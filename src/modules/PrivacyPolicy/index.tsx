'use client';
import Link from 'next/link';
import { useRef } from 'react';

import { SectionHeader, Typography } from '@codewinglet/components';

import ScrollHighlightNavbar from './ScrollHighlighNavBar';

const PrivacyPolicy = () => {
  const introductionRef = useRef<any>();
  const typesRef = useRef<any>();
  const cookiesRef = useRef<any>();
  const collectedRef = useRef<any>();
  const personalRef = useRef<any>();
  const transferRef = useRef<any>();
  const disclosureRef = useRef<any>();
  const amendmentsRef = useRef<any>();
  const acceptanceRef = useRef<any>();

  const PolicyData = [
    {
      title: 'Introduction',
      id: 'introduction',
      ref: introductionRef,
    },
    {
      title: 'Types of data collected',
      id: 'types',
      ref: typesRef,
    },
    {
      title: 'Use of cookies',
      id: 'cookies',
      ref: cookiesRef,
    },
    {
      title: 'Uses the collected data',
      id: 'collected',
      ref: collectedRef,
    },
    {
      title: 'Personal info storage & security',
      id: 'personal',
      ref: personalRef,
    },
    {
      title: 'Transfer of data',
      id: 'transfer',
      ref: transferRef,
    },
    {
      title: 'Disclosure Of data',
      id: 'disclosure',
      ref: disclosureRef,
    },
    {
      title: 'Amendments to this policy',
      id: 'amendments',
      ref: amendmentsRef,
    },
    {
      title: 'Your acceptance of this policy',
      id: 'acceptance',
      ref: acceptanceRef,
    },
  ];

  return (
    <>
      <div className=' bg-bg mt-[35px] md:pb-[35px] pb-[15px] md:pt-20 lg:[position:_unset;] absolute md:top-[90px] top-[130px] w-full z-10'>
        <div className='container w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto'>
          <div>
            <SectionHeader
              title={<>Privacy policy</>}
              headingClassName=''
              descriptionClassName='hidden'
            />
          </div>
        </div>
      </div>

      <div className=' bg-white pt-10 [scroll-behavior:_smooth;]'>
        <div className='container w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto lg:pt-0 md:pt-[280px] pt-[200px] relative pb-1'>
          <div className='lg:flex block gap-[50px] items-start mb-[50px]'>
            <ScrollHighlightNavbar navHeader={PolicyData} />
            <div className='2xl:w-[65%] xl:w-[60%] w-full'>
              {/* Introduction : */}
              <div id='introduction' ref={introductionRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Introduction :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  At Codewinglet, we recognize the value of privacy for each
                  individual and take every precaution to protect it. This
                  policy aims to explain how we collect, utilize, and handle the
                  personal information of our clients and visitors.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  This privacy statement describes the uses and storage of
                  personal data that you provide through online forms or that we
                  otherwise obtain from you.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pb-10'>
                  Make sure you are aware that by accessing and using
                  http://www.codewinglet.com , you agree to the terms and
                  conditions outlined in this privacy statement. Additionally,
                  we frequently update our rules, so it's advisable to check
                  this page sometimes to stay up to date on the most recent
                  terms and conditions.
                </Typography>

                <ul className='grid gap-[30px] ml-5'>
                  <li className='text-paragraph1Light list-disc'>
                    Service
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Service is the{' '}
                      <Link
                        href='https://www.codewinglet.com'
                        className='text-primary text-paragraph1'
                      >
                        https://www.codewinglet.com
                      </Link>{' '}
                      website operated by Codewinglet.
                    </Typography>
                  </li>
                  <li className='text-paragraph1Light list-disc'>
                    Personal data
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Information that can be used to identify a live person is
                      referred to as personal data (or information that can be
                      used in conjunction with other data that we now have or
                      are likely to acquire).
                    </Typography>
                  </li>
                  <li className='text-paragraph1Light list-disc'>
                    Usage data
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Usage data is information that is automatically gathered
                      from the service infrastructure or from users of the
                      service (e.g., the length of a page visit).
                    </Typography>
                  </li>
                  <li className='text-paragraph1Light list-disc'>
                    Cookies
                    <Typography className='text-paragraph1ExtraLight text-secondary pb-3 pt-2.5'>
                      Cookies are little files that are kept on your PC or
                      mobile device.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-secondary'>
                      Information Gathering and Utilization <br /> We gather a
                      variety of information for a range of uses in order to
                      give you better service.
                    </Typography>
                  </li>
                </ul>
              </div>

              {/* Types of data collected : */}
              <div className='mt-[50px]' id='types' ref={typesRef}>
                <Typography
                  className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'
                  id='types'
                >
                  Types of data collected :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  We may request certain personally identifiable information
                  from you while you use our service, which we can use to get in
                  touch with or identify you ("Personal Data"). Information that
                  is personally identifiable may comprise, but is not restricted
                  to :
                </Typography>

                <ul className='grid gap-[15px] ml-5 my-[25px]'>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    Email address
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    First name and last name
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    Phone number
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    Cookies and usage data
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    Location data
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    Communication data
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    Traffic data
                  </li>
                </ul>
                <Typography className='text-paragraph1ExtraLight text-secondary pb-5'>
                  We obtain access to certain information from your voluntary
                  interactions with our associates while you are on the website,
                  while other information is obtained directly from you through
                  the forms, direct email, and phone options that we have put up
                  on the website.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pb-5'>
                  Please take note that the information above does not
                  personally identify any of the users. All that is needed to
                  improve our website and the services we provide is statistical
                  data.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pb-5'>
                  <span className='!text-paragraph1'> Note :</span> When
                  processing payments for any service you use, we do not save
                  your bank account information, credit card information, or
                  debit card information.
                </Typography>
              </div>

              {/* Use of cookies : */}
              <div className='mt-[50px]' id='cookies' ref={cookiesRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Use of cookies :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  We track activity on our service using cookies and other
                  tracking technologies, and we have access to some data.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  Cookies are files containing a limited bit of data, which may
                  include an anonymous unique identity. A website sends cookies
                  to your browser, which are then saved on your device. Other
                  tracking technologies, including as beacons, tags, and
                  scripts, are used to collect and track data, as well as to
                  improve and analyze our service.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  You may set your browser to refuse all cookies or to notify
                  you when a cookie is transmitted. However, if you do not
                  accept cookies, you may be unable to utilize certain features
                  of our Service.
                </Typography>

                <ul className='ml-5 my-[25px]'>
                  <li className='text-paragraph1Extra list-disc '>
                    Examples of cookies we use
                    <Typography className='text-secondary pt-5'>
                      <span className='text-paragraph1'>
                        - Session Cookies :
                      </span>
                      To run our service, we make use of session cookies.
                    </Typography>
                    <Typography className='text-secondary py-5'>
                      <span className='text-paragraph1'>
                        - Preference Cookies :
                      </span>
                      To keep track of your preferences and other settings.
                    </Typography>
                    <Typography className='text-secondary '>
                      <span className='text-paragraph1'>
                        - Security Cookies :
                      </span>
                      To security reasons, we employ Security Cookies.
                    </Typography>
                  </li>
                </ul>
              </div>

              {/* Uses the collected data : */}
              <div className='mt-[50px]' id='collected' ref={collectedRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Uses the collected data :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  The main reason for data storage is to improve our website and
                  deliver the best possible services. The following lists the
                  objectives of the data collected :
                </Typography>

                <ul className='ml-5 my-[25px] grid gap-5'>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To perform and maintain the service
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To inform you of any modifications to our service
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To allow you to get involved with interactive elements of
                    our service if you so choose
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To offer assistance and care to customers
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To offer insights or important data so that we can enhance
                    the service
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To track how the service is being used
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To identify, stop, and resolve technological problems
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To promptly give you the information you requested
                  </li>
                  <li className='text-paragraph1ExtraLight list-disc'>
                    To share details about similar products or services
                  </li>
                </ul>
                <Typography className='text-paragraph1ExtraLight text-secondary'>
                  Usually with your permission will the information you submit
                  be shared with certain third parties whose goods or services
                  may be of interest to you. Anytime you'd like, you can take
                  back your consent.
                </Typography>
              </div>

              {/* Personal info storage & security : */}
              <div className='mt-[50px]' id='personal' ref={personalRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Personal info storage & security :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  By completing the online forms, you grant us access to your
                  personal data and let us use of it for future needs.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  While we take every precaution to secure your personal
                  information, we are unable to provide a 100% assurance due to
                  the inherent insecurity of communicating information over the
                  Internet.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary'>
                  Information can be intercepted, therefore you share any
                  personal information at your own risk.
                </Typography>
              </div>

              {/* Transfer of data : */}
              <div className='mt-[50px]' id='transfer' ref={transferRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Transfer of data :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  It is possible for your data, including Personal Data, to be
                  moved to and kept on computers situated outside of your
                  nation, state, or other governmental jurisdiction where data
                  protection regulations may be different from those in your
                  jurisdiction.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  Keep in mind aware that if you choose to give us information
                  while you are not in the US, the data—including Personal
                  Data—will be transferred to and processed in the US.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary'>
                  Your agreement to the transfer is shown by your acceptance of
                  this Privacy Policy and your submission of such information.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  No transfer of your personal data will occur to another
                  organization or nation unless sufficient safeguards, such as
                  those pertaining to the security of your data and other
                  personal information, are in place.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary'>
                  Codewinglet will take all reasonably required steps to
                  guarantee that your data is handled securely and in compliance
                  with this Privacy Policy.
                </Typography>
              </div>

              {/* Disclosure of data : */}
              <div className='mt-[50px]' id='disclosure' ref={disclosureRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Disclosure of data :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  We never give away personal information about our customers or
                  visitors to outside parties. We don't exchange personal data
                  or give it to any parties for sale or rental. For marketing
                  purposes, we might provide our reliable affiliates,
                  advertisers, and business partners with general aggregated
                  information.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                  <span className='text-paragraph1'> Note :</span> No one's name
                  is disclosed by any information shared within our circle of
                  trusted business associates. Your confidentiality is always
                  maintained.
                </Typography>

                <ul className='my-[25px] grid gap-5'>
                  <li className='list-disc ml-5 text-paragraph1Light'>
                    Legal requirements
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Your personal information may be disclosed by codewinglet
                      if it is in good faith believed that it is required to :
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary pt-2.5'>
                      - To fulfill a legal requirement
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary pt-2.5'>
                      - To safeguard and uphold Codewinglet's property or rights
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary pt-2.5'>
                      - To stop or look into potential misconduct related to the
                      Service
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary pt-2.5'>
                      - To protect the public's or service users' safety
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-primary pt-2.5'>
                      - To avoid being held liable
                    </Typography>
                  </li>
                  <li className='list-disc ml-5 text-paragraph1Light'>
                    Security of data
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Although we care about the security of your information,
                      keep in mind that no method of electronic data
                      transmission over the Internet or technique of electronic
                      data storage is 100% secure. Although we work hard to
                      safeguard your personal information using methods that are
                      acceptable to businesses, we are unable to ensure complete
                      security.
                    </Typography>
                  </li>
                  <li className='list-disc ml-5 text-paragraph1Light'>
                    Service providers
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      We may utilize outside businesses and people (referred to
                      as "Service Providers") to help us deliver our service,
                      handle service-related tasks, facilitate our service, or
                      help us analyze how our service is used.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                      Your Personal Data is only accessible to these third
                      parties for the purposes of carrying out these duties on
                      our behalf, and they are under no obligation to disclose
                      or use it for any other reason.
                    </Typography>
                  </li>
                  <li className='list-disc ml-5 text-paragraph1Light'>
                    Links to other sites
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Links to external websites that are not run by us may be
                      found inside our service. You will be redirected to the
                      website of the third party if you click on one of their
                      links. It is highly recommended that you go over each
                      website's privacy policy.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                      We disclaim all liability and control over the privacy
                      practices, content, and policies of any third-party
                      websites or services.
                    </Typography>
                  </li>
                  <li className='list-disc ml-5 text-paragraph1Light'>
                    Children’s privacy
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-2.5'>
                      Our Service does not address anyone under the age of 18
                      “Children”.
                    </Typography>
                    <Typography className='text-paragraph1ExtraLight text-secondary pt-5'>
                      Nobody younger than the age of 18 has ever provided us
                      with personally identifiable information. Should you, as a
                      parent or guardian, be aware that your child has given us
                      personal information, kindly get in touch with us. We take
                      action to delete information from our servers if we
                      discover that we have obtained Personal Data from minors
                      without first obtaining proof of parental consent.
                    </Typography>
                  </li>
                </ul>

                <Typography className='text-paragraph1ExtraLight text-secondary'>
                  Nobody younger than the age of 18 has ever provided us with
                  personally identifiable information. Should you, as a parent
                  or guardian, be aware that your child has given us personal
                  information, kindly get in touch with us. We take action to
                  delete information from our servers if we discover that we
                  have obtained Personal Data from minors without first
                  obtaining proof of parental consent.
                </Typography>
              </div>

              {/* Amendments to this policy : */}
              <div className='mt-[50px]' id='amendments' ref={amendmentsRef}>
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Amendments to this policy :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  We periodically update this policy to guarantee the highest
                  level of security for the information you choose to share with
                  us. Every time we make revisions to the policy and publish
                  them, we update the date on this page.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  We urge users and clients of our website to often consult this
                  page in order to be up to date on the most recent changes and
                  actions. We are taking into consideration your
                  acknowledgment and agreement to frequently check the privacy
                  policy and keep up with any revisions or modifications.
                </Typography>
              </div>

              {/* Your acceptance of this policy : */}
              <div
                className='mt-[50px] mb-[50px]'
                id='acceptance'
                ref={acceptanceRef}
              >
                <Typography className='text-subtitle2 border-b border-headerBoxBorder pb-[15px]'>
                  Your acceptance of this policy :
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary mt-5'>
                  You agree to this privacy statement by using this website. It
                  is recommended that you refrain from using
                  http://Codewinglet.com if you do not want to accept the terms
                  stated in this policy or if you do not desire to accept them.
                </Typography>
                <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                  After we make changes to this privacy policy, your continuing
                  use of our website, http://www.codewinglet.com, will be taken
                  as your agreement to the updated terms and conditions.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

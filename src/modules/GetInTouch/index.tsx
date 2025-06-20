import React from 'react';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

import {
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  DribbleIcon,
  BehanceIcon,
} from './components/SocialIcons';

const ContactCard = ({
  icon: Icon,
  title,
  value,
  href,
  description,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  description?: string;
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'

    className='group block p-6 border border-gray-500 rounded-2xl bg-gray-800'
  >
    <div className='flex items-start space-x-4'>
      <div className='flex-shrink-0'>
        <div className='w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
          <Icon className='w-6 h-6 text-white' />
        </div>
      </div>
      <div className='flex-1 min-w-0'>
        <h3 className='text-subtitle2Light font-medium text-white group-hover:text-blue-300 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-white !font-light'>{value}</p>
        {description && (
          <p className='text-sm text-gray-200 mt-1 !font-light'>
            {description}
          </p>
        )}
        <div className='flex items-center mt-2 text-sm text-info group-hover:text-blue-200'>
          <span>Connect with us</span>
          <ExternalLink className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300' />
        </div>
      </div>
    </div>
  </a>
);

const SocialLink = ({
  icon: Icon,
  name,
  href,
  bgColor,
}: {
  icon: React.ElementType;
  name: string;
  href: string;
  bgColor: string;
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='group relative'
  >
    <div
      className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
    >
      <Icon className='w-7 h-7 text-white' color='white' />
    </div>
    <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <span className='text-xs font-medium text-gray-300 whitespace-nowrap'>
        {name}
      </span>
    </div>
  </a>
);

function GetInTouch() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'jobs@codewinglet.com',
      href: 'mailto:jobs@codewinglet.com',
      description: 'Get in touch for inquiries and support',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 81608 68310',
      href: 'tel:+918160868310',
      description: 'Available Monday to Friday, 10:00 AM - 06:00 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value:
        'A901-905, Vivanta Icon, Opp. Shell Petrol Pump, Adajan, Surat, Gujarat 395009.',
      href: 'https://maps.app.goo.gl/mwfTwRLRfocbcwm77',
      description: 'We are located in the heart of innovation',
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.codewinglet.com',
      href: 'https://www.codewinglet.com',
      description: 'Explore our services and portfolio',
    },
  ];

  const socialLinks = [
    {
      icon: LinkedInIcon,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/codewinglet',
      bgColor: 'bg-linkedin',
    },
    {
      icon: InstagramIcon,
      name: 'Instagram',
      href: 'https://www.instagram.com/codewinglet',
      bgColor: 'bg-instagram',
    },
    {
      icon: FacebookIcon,
      name: 'Facebook',
      href: 'https://www.facebook.com/codewingletpteltd',
      bgColor: 'bg-facebook',
    },
    {
      icon: XIcon,
      name: 'X (Twitter)',
      href: 'https://x.com/codewinglet',
      bgColor: 'bg-twitter',
    },
    {
      icon: DribbleIcon,
      name: 'Dribble',
      href: 'https://dribbble.com/codewingletprivatelimited',
      bgColor: 'bg-dribble',
    },
    {
      icon: BehanceIcon,
      name: 'Behance',
      href: 'https://www.behance.net/codewinglet',
      bgColor: 'bg-behance',
    },
  ];

  return (
    <div className='relative lg:py-20 md:py-[60px] py-[30px] sm:pb-[inherit] pb-10 lg:mt-[86px] md:mt-[90px] mt-[78px] bg-[linear-gradient(131deg,_#1f29377d_0%,_#111827ed_100%)]'>
      {/* Hero Section */}
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
        <div className='text-center lg:mb-16 mb-10'>
          <h2 className='md:text-[36px] sm:text-h3 text-h5 font-medium text-white mb-2'>
            Get In
            <span className='touch-text'> Touch</span>
          </h2>
          <p className='text-tag sm:text-lg lg:text-subtitle2 text-gray-200 !font-light max-w-3xl mx-auto leading-relaxed'>
            Connect with CodeWinglet across all platforms. We're here to help
            you soar to new heights.
          </p>
        </div>

        {/* Contact Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16'>
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>

        {/* Social Media Section */}
        <div className='bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10'>
          <div className='text-center mb-12'>
            <h3 className='text-h5 sm:text-h2 font-medium text-white md:mb-4 mb-2'>
              Follow Our Journey
            </h3>
            <p className='text-tag sm:text-subtitle2 text-gray-200 max-w-2xl mx-auto !font-light'>
              Stay connected with us on social media for the latest updates,
              insights, and behind-the-scenes content.
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-6 sm:gap-8 mb-12'>
            {socialLinks.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;

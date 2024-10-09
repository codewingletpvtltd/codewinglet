import Link from 'next/link';

import { cn } from '@codewinglet/utils';

import { socialLinks } from './constants';

interface SocialMediaProps {
  bgColor: string;
  iconColor: string;
  width: string;
  height: string;
}

const SocialMedia = ({
  bgColor,
  iconColor,
  width,
  height,
}: SocialMediaProps) => (
  <>
    {socialLinks.map((link, index) => (
      <Link
        key={index}
        className={cn(
          `flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0
          !bg-${bgColor} !border-${bgColor} !w-[${width}px] !h-[${height}px]`
        )}
        href={link.href}
        target='_blank'
        aria-label={link.label}
      >
        {link.icon(iconColor)}
      </Link>
    ))}
  </>
);

export default SocialMedia;

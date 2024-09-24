import BehanceIcon from '../Icon/BehanceIcon';
import DribbleIcon from '../Icon/DribbleIcon';
import FacebookIcon from '../Icon/FacebookIcon';
import InstagramLogo from '../Icon/InstagramIcon';
import LinkedinIcon from '../Icon/LinkedinIcon';
import TwitterIcon from '../Icon/TwitterIcon';

export const socialLinks = [
  {
    href: 'https://in.linkedin.com/company/codewinglet',
    alt: 'LinkedInLogo',
    icon: (color: string) => <LinkedinIcon color={color} />,
  },
  {
    href: 'https://www.instagram.com/codewinglet/',
    icon: (color: string) => <InstagramLogo color={color} />,
    alt: 'InstagramLogo',
  },
  {
    href: 'https://www.facebook.com/codewingletpteltd',
    icon: (color: string) => <FacebookIcon color={color} />,
    alt: 'FacebookLogo',
  },
  {
    href: 'https://twitter.com/codewinglet',
    icon: (color: string) => <TwitterIcon color={color} />,
    alt: 'TwitterLogo',
  },
  {
    href: 'https://dribbble.com/codewingletprivatelimited',
    icon: (color: string) => <DribbleIcon color={color} />,
    alt: 'DribbleLogo',
  },
  {
    href: 'https://www.behance.net/codewinglet',
    icon: (color: string) => <BehanceIcon color={color} />,
    alt: 'BehanceLogo',
  },
];

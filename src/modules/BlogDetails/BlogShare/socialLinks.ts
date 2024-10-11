import FaceBookLogo from '/public/assets/icons/Facebook.svg';
import LinkedinLogo from '/public/assets/icons/Linkedin.svg';
import TwitterLogo from '/public/assets/icons/Twitter.svg';

export const socialLinks = [
  {
    href: (...rest: Array<string>) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${rest[0]}`,
    src: LinkedinLogo,
    width: 18,
    height: 18,
    alt: 'LinkedInLogo',
  },
  {
    href: (...rest: Array<string>) =>
      `https://www.facebook.com/sharer/sharer.php?u=${rest[0]}`,
    src: FaceBookLogo,
    width: 20,
    height: 20,
    alt: 'FacebookLogo',
  },
  {
    href: (...rest: Array<string>) =>
      `https://twitter.com/intent/tweet?url=${rest[0]}&text=${rest[1]}`,
    src: TwitterLogo,
    width: 19,
    height: 20,
    alt: 'TwitterLogo',
  },
];

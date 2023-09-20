import Link from 'next/link';
import { Email, LocationPin, Phone } from '@codewinglet/assets';

export const info = [
  {
    id: 1,
    icon: (
      <LocationPin className='h-[40px] w-[90px] md:w-[100px] 2xl:w-[60px]' />
    ),
    title: 'Address',
    detail:
      'A901-A905, Vivanta Icon, Opp. Shell Petrol Pump, Adajan, Surat, Gujarat 395009.',
  },
  {
    id: 2,
    icon: <Phone />,
    title: 'Phone',
    detail: <Link href='tel:+918320111741'>+91 83201 11741</Link>,
  },
  {
    id: 3,
    icon: <Email />,
    title: 'Email',
    detail: (
      <Link href='mailto:sales@codewinglet.com'>sales@codewinglet.com</Link>
    ),
  },
];

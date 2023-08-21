import { Email, LocationPin, Phone } from '@codewinglet/assets';

export const info = [
  {
    id: 1,
    icon: <LocationPin className='h-[40px] w-[90px] md:w-[65px] mr-[10px]' />,
    title: 'Address',
    detail:
      'A901-A905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat, Gujarat 395009.',
  },
  {
    id: 2,
    icon: <Phone className='mr-[15px]' />,
    title: 'Phone',
    detail: '+91 83201 11741',
  },
  {
    id: 3,
    icon: <Email className='mr-[15px]' />,
    title: 'Email',
    detail: 'sale@codewinglet.com',
  },
];

import Link from 'next/link';
import { Email, LocationPin, Phone } from '@codewinglet/assets';
import { Typography } from '@codewinglet/components';

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
    detail: (
      <div className='flex flex-col gap-2'>
        <Typography variant='subtitle2'>
          <Link href='tel:+918320111741'>
            <strong>HR:</strong> +91 83201 11741
          </Link>
        </Typography>
        <Typography variant='subtitle2'>
          <Link href='tel:+918160868310'>
            <strong>Jobs:</strong> +91 81608 68310
          </Link>
        </Typography>
        <Typography variant='subtitle2'>
          <Link href='tel:+919687973728'>
            <strong>Sales:</strong> +91 96879 73728
          </Link>
        </Typography>
      </div>
    ),
  },
  {
    id: 3,
    icon: <Email />,
    title: 'Email',
    detail: (
      <div className='flex flex-col gap-2'>
        <Typography variant='subtitle2'>
          <Link href='mailto:hr@codewinglet.com'>
            <strong>HR:</strong> hr@codewinglet.com
          </Link>
        </Typography>
        <Typography variant='subtitle2'>
          <Link href='mailto:jobs@codewinglet.com'>
            <strong>Jobs:</strong> jobs@codewinglet.com
          </Link>
        </Typography>
        <Typography variant='subtitle2'>
          <Link href='mailto:sales@codewinglet.com'>
            <strong>Sales:</strong> sales@codewinglet.com
          </Link>
        </Typography>
      </div>
    ),
  },
];

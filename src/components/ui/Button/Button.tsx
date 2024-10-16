import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@codewinglet/utils';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap text-paragraph2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-primary text-white hover:text-primary border-primary border hover:bg-white transition-all duration-300',
      outline:
        'border border-white hover:bg-white text-white hover:text-primary disabled:opacity-100 disabled:border-secondary disabled:text-secondary transition-all duration-300',
      blackOutline:
        'border border-primary bg-white hover:bg-primary text-black hover:text-white disabled:opacity-100 disabled:border-secondary disabled:text-secondary transition-all duration-300',
      secondary:
        'bg-bg hover:text-white hover:bg-primary transition-all duration-300',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'md:h-[52px] h-11 py-2.5',
      sm: 'px-[25px] py-2',
      icon: 'h-10 w-10',
      small: '',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean; // New loading prop
  isIconOnly?: boolean; // New loading prop
  loadingPosition?: 'start' | 'end'; // New loading position prop
  startIcon?: React.ReactNode; // Start icon prop
  endIcon?: React.ReactNode; // End icon prop
}

const LoaderIcon = () => (
  <svg
    className='animate-spin h-5 w-5 text-inherit' // Spinner
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='3'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
      strokeWidth={'3'}
    ></path>
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      loadingPosition = 'start', // Default to start
      startIcon,
      endIcon,
      children,
      isIconOnly,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Determine the loading icon
    const loadingIcon = <LoaderIcon />;

    // Replace the relevant icon with the loading spinner if loading
    if (loading) {
      if (loadingPosition === 'start') {
        startIcon = loadingIcon;
      } else if (loadingPosition === 'end') {
        endIcon = loadingIcon;
      }
    }

    // const isIconOnly = !children && (startIcon || endIcon); // Check if it's an icon-only button

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          loading && 'cursor-not-allowed' // Add a disabled cursor when loading
        )}
        ref={ref}
        disabled={loading} // Disable button when loading
        {...props}
      >
        {startIcon && <span className='mr-2'>{startIcon}</span>}
        {!isIconOnly && children} {/* Button text or other children */}
        {endIcon && <span className='ml-2'>{endIcon}</span>}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;

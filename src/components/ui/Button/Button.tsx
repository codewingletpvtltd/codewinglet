import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { getDefaultConfig, mergeConfigs } from 'tailwind-merge';

import { cn } from '@codewinglet/utils';
import { configTwMerge } from '@codewinglet/utils/cn';

const buttonVariants = tv(
  {
    base: 'inline-flex items-center justify-center whitespace-nowrap text-paragraph2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-500',
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
        link: 'text-primary  underline-offset-4 hover:font-semibold focus:border-mediumBlue focus:border disabled:text-secondary',
        primary:
          'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white focus:bg-transparent focus:text-primary focus:border-mediumBlue disabled:bg-transparent disabled:text-secondary disabled:border-secondary',
        sec: 'bg-primary border border-primary text-white hover:bg-transparent hover:text-primary focus:bg-primary focus:border-mediumBlue focus:text-white disabled:bg-gainsboro disabled:border-gainsboro disabled:text-secondary',
      },
      size: {
        default: 'md:h-[52px] h-11 py-2.5',
        sm: 'px-[25px] py-2',
        icon: 'h-10 w-10',
        small: 'text-smMedium font-medium leading-[22px] py-2 px-3 gap-[2px]',
        medium: 'py-2 px-3 text-baseMedium leading-6 gap-[2px]',
        large: 'px-5 py-3 text-lgMedium gap-1',
      },
      dark: {
        true: '',
        false: '',
      },
      isIconOnly: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
    },
    compoundVariants: [
      {
        variant: 'primary',
        dark: true,
        class:
          'border-white text-white hover:bg-white hover:text-primary focus:text-white disabled:bg-secondary disabled:border-secondary disabled:bg-transparent',
      },
      {
        variant: 'sec',
        dark: true,
        class:
          'border-white bg-white text-primary hover:bg-transparent hover:text-white focus:bg-white focus:text-primary',
      },
      {
        variant: 'link',
        dark: true,
        class: 'text-white hover:text-white focus:text-white',
      },
      {
        size: 'small',
        isIconOnly: true,
        class: 'p-2',
      },
      {
        size: 'medium',
        isIconOnly: true,
        class: 'p-3',
      },
      {
        size: 'large',
        isIconOnly: true,
        class: 'p-3.5',
      },
    ],
  },
  {
    twMergeConfig: mergeConfigs(getDefaultConfig(), configTwMerge),
  }
);

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
    aria-hidden='true'
    className={
      'w-8 h-8 text-inherit fill-inherit text-opacity-10 animate-spin '
    }
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
      fill='currentColor'
    />
    <path
      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
      fill='currentFill'
    />
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
      isIconOnly = false,
      disabled,
      dark = false,
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

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, dark, isIconOnly }),
          loading && 'cursor-not-allowed' // Add a disabled cursor when loading
        )}
        ref={ref}
        disabled={disabled || loading} // Disable button when loading
        {...props}
      >
        {startIcon && startIcon}
        {!isIconOnly && children}
        {endIcon && endIcon}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;

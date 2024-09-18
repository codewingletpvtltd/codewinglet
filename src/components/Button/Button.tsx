/* eslint-disable import/order */
import { cn } from '@codewinglet/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-paragraph2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white hover:text-primary border-primary border hover:bg-white transition-all duration-300',
        destructive: 'bg-destructive text-destructive-foreground',
        outline:
          'border border-white hover:bg-white text-white hover:text-primary disabled:opacity-100	disabled:border-secondary disabled:text-secondary transition-all duration-300',
        blackOutline:
          'border border-primary bg-white hover:bg-primary text-black hover:text-white disabled:opacity-100	disabled:border-secondary disabled:text-secondary transition-all duration-300',
        secondary:
          'bg-bg hover:text-white hover:bg-primary transition-all duration-300',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'md:py-[15px] py-2.5',
        sm: 'px-[25px] py-2',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;

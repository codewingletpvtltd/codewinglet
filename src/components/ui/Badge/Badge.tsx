// components/Badge.tsx
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const badgeVariants = tv({
  base: 'absolute flex items-center justify-center font-bold text-white rounded-full border',
  variants: {
    size: {
      small: 'w-4 h-4 text-[10px] p-0.5',
      medium: 'w-5 h-5 text-xs p-1',
      large: 'w-6 h-6 text-sm p-1.5',
    },
    color: {
      default: 'bg-black border-black',
      red: 'bg-red-500 border-red-400',
      green: 'bg-green-500 border-green-400',
      blue: 'bg-blue-500 border-blue-400',
      yellow: 'bg-yellow-500 border-yellow-400',
      purple: 'bg-purple-500 border-purple-400',
    },
  },
  defaultVariants: {
    size: 'small',
    color: 'default',
  },
});
export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
  color?: 'default' | 'red' | 'green' | 'blue' | 'yellow' | 'purple';
  overlap?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  content,
  children,
  color = 'default',
  overlap = false,
  size = 'small',
  className = '',
}) => {
  // Combine classes for badge styling
  const badgeStyles = badgeVariants({ size, color });

  return (
    <div className='relative inline-flex items-center'>
      {children}
      <span
        className={`${badgeStyles} ${
          overlap ? 'translate-x-2 translate-y-2' : '-top-2 -right-2'
        } ${className}`}
      >
        {content}
      </span>
    </div>
  );
};

export default Badge;

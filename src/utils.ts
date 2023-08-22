import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getClassNames = (defaultClassName: string, ...rest: string[]) =>
  [defaultClassName, ...rest].filter((name) => name.trim() !== '').join(' ');

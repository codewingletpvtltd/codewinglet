import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import config from '../../tailwind.config';

export const configTwMerge = {
  classGroups: {
    'font-size': Object.keys(config.theme.fontSize).map((key) => `text-${key}`),
    'text-color': Object.keys(config.theme.extend.colors).map(
      (key) => `text-${key}`
    ),
  },
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getClassNames = (defaultClassName: string, ...rest: string[]) =>
  [defaultClassName, ...rest].filter((name) => name.trim() !== '').join(' ');

export const twMerge = extendTailwindMerge(configTwMerge);

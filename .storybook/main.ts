import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@codewinglet/*': path.resolve(__dirname, '../src/'),
      '@codewinglet/utils': path.resolve(__dirname, '../src/utils'),
      '@codewinglet/assets': path.resolve(__dirname, '../src/assets/index.ts'),
      '@codewinglet/constants': path.resolve(__dirname, '../src/constants'),
    };
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../src/assets', '../public'],
};
export default config;

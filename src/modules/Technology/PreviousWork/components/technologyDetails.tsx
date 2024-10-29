import {
  CodeIcon,
  CoreIcon,
  FormIcon,
  StateIcon,
  TestingIcon,
  ToolsIcon,
  UIIcon,
} from '@codewinglet/assets';

export type TechnologyDetail = {
  icon: React.ReactNode;
  label: string;
  content: {
    title: string;
    description: string;
    tag?: string[];
  };
};

export type TechnologyDetailTabsProps = {
  onTabHover: (item: TechnologyDetail) => void;
};

export type TechnologyDetailContentProps = {
  content: {
    title: string;
    description: string;
    tag?: string[];
  };
};

export const technologyDetails = [
  {
    icon: <CoreIcon />,
    label: 'Development Tools and Libraries',
    content: {
      title: 'Code Handling and Optimization',
      description:
        'Supports code quality and performance with tools like transpilers, bundlers, linters, and formatters for writing, optimizing, and maintaining clean, efficient code.',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
  {
    icon: <StateIcon />,
    label: 'UI Component Libraries',
    content: {
      title: 'UI Component Libraries',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quisquam aut? Recusandae dignissimos delectus sed blanditiis deleniti?',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
  {
    icon: <UIIcon />,
    label: 'State Management',
    content: {
      title: 'State Management',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quisquam aut? Recusandae dignissimos delectus sed blanditiis deleniti?',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
  {
    icon: <CodeIcon />,
    label: 'Miscellaneous Libraries and Utilities',
    content: {
      title: 'Miscellaneous Libraries and Utilities',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quisquam aut? Recusandae dignissimos delectus sed blanditiis deleniti?',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
  {
    icon: <TestingIcon />,
    label: 'Testing and Validation',
    content: {
      title: 'Testing and Validation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quisquam aut? Recusandae dignissimos delectus sed blanditiis deleniti?',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
  {
    icon: <FormIcon />,
    label: 'Routing and Form Management',
    content: {
      title: 'Routing and Form Management',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quisquam aut? Recusandae dignissimos delectus sed blanditiis deleniti?',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
  {
    icon: <ToolsIcon />,
    label: 'Auxiliary Tools and Libraries',
    content: {
      title: 'Auxiliary Tools and Libraries',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quisquam aut? Recusandae dignissimos delectus sed blanditiis deleniti?',
      tag: [
        'TypeScript',
        'Parcel',
        'Webpack',
        'ESLint',
        'Rollup',
        'Prettier',
        'Babel',
      ],
    },
  },
];

import { StoryObj } from '@storybook/react';

import CodeBlock from './CodeBlock';

export default {
  component: CodeBlock,
  tags: ['CodeBlock'],
  parameters: {
    layout: 'centered',
  },
};

export const Basic: StoryObj<typeof CodeBlock> = {
  args: {
    code: `function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}

function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

calculate(sum, 0, [1, 2, 4]);      // => 7
calculate(multiply, 1, [1, 2, 4]); // => 8

    `,
    language: 'javascript',
  },
};

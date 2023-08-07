import TypeAnimation from './TypeAnimation';

export default {
  component: TypeAnimation,
  tags: ['TypeAnimation', 'autodocs'],
};

const sequence = [
  'EdTech',
  'E-Commerce',
  'Healthcare',
  'Real Estate',
  'CRM',
  'Smart Assets Management',
];

/**
 * Basic type animation
 */
export const Basic = (args: typeof TypeAnimation) => (
  <TypeAnimation sequence={sequence} {...args} />
);

/**
 * Customize typing and deletion speed
 */
export const CustomSpeed = (args: typeof TypeAnimation) => (
  <TypeAnimation sequence={sequence} speed={1000} {...args} />
);

/**
 * Pass any typography variant
 */
export const CustomVariant = (args: typeof TypeAnimation) => (
  <>
    <TypeAnimation sequence={sequence} variant='h1' {...args} />
    <TypeAnimation sequence={sequence} variant='h2' {...args} />
    <TypeAnimation sequence={sequence} variant='h3' {...args} />
    <TypeAnimation sequence={sequence} variant='h4' {...args} />
  </>
);

/**
 * Set repeatation "infinity" or any number
 */
export const Repeat = (args: typeof TypeAnimation) => (
  <>
    <TypeAnimation
      sequence={sequence}
      variant='h1'
      repeat='infinity'
      {...args}
    />
    <TypeAnimation sequence={sequence} variant='h1' repeat={2} {...args} />
  </>
);

/**
 * Set word delay in milliseconds. Default value 300ms
 */
export const WordDelay = (args: typeof TypeAnimation) => (
  <TypeAnimation
    sequence={sequence}
    variant='h1'
    repeat='infinity'
    wordDelay={1000}
    {...args}
  />
);

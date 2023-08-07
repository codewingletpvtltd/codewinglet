import {
  ElementByTypographyVariant,
  TypographyVariant,
} from '../Typography/types';

export type TypingHTMLElement = ElementByTypographyVariant[TypographyVariant];

export type GeneratorFunction = Generator<any, void, any>;

export type TypeAnimationProps = {
  sequence: Array<string>;
  variant?: TypographyVariant;
  repeat?: 'infinity' | number;
  speed?: number;
  wordDelay?: number;
};

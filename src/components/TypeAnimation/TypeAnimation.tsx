'use client';
import { HTMLAttributes, MutableRefObject, forwardRef, useEffect } from 'react';

import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography/Typography';
import {
  ElementByTypographyVariant,
  TypographyVariant,
} from '../Typography/types';
import { TypeAnimationProps, TypingHTMLElement } from './types';
import useForwardRef from './hooks/useForwardRef';
import { typingMain } from './utils/typical';
import './TypeAnimation.css';

const DEFAULT_SPEED = 70;
const DEFAULT_WORD_DELAY = 300;

const TypeAnimation = forwardRef<
  ElementByTypographyVariant[TypographyVariant],
  TypeAnimationProps &
    HTMLAttributes<ElementByTypographyVariant[TypographyVariant]>
>(
  (
    {
      sequence,
      variant = 'h2',
      repeat = 'infinity',
      speed = DEFAULT_SPEED,
      wordDelay = DEFAULT_WORD_DELAY,
      className = '',
    },
    ref
  ) => {
    const textRef: MutableRefObject<TypingHTMLElement> = useForwardRef(ref);

    useEffect(() => {
      if (textRef.current) {
        let sequenceArr: Array<string | typeof typingMain> = [...sequence];

        if (repeat === 'infinity') {
          sequenceArr = [...sequence, typingMain];
        } else if (typeof repeat === 'number') {
          sequenceArr = Array(1 + repeat)
            .fill(sequence)
            .flat();
        }

        typingMain(textRef.current, sequenceArr, speed, wordDelay);
      }

      return () => {
        textRef.current;
      };
    }, []);

    return (
      <Typography
        className={getClassNames('typing-cursor text-primary', className)}
        variant={variant}
        ref={textRef}
      />
    );
  }
);

TypeAnimation.displayName = 'TypeAnimation';

export default TypeAnimation;

import { HTMLAttributes, MutableRefObject, forwardRef, useEffect } from 'react';
import Typography from '../Typography/Typography';
import {
  ElementByTypographyVariant,
  TypographyVariant,
} from '../Typography/types';
import { TypeAnimationProps, TypingHTMLElement } from './types';
import useForwardRef from './hooks/useForwardRef';
import { typingMain } from './typical';
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
      variant = 'h3',
      repeat = 0,
      speed = DEFAULT_SPEED,
      wordDelay = DEFAULT_WORD_DELAY,
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
    }, [repeat, sequence, speed, textRef]);

    return (
      <Typography
        className='typing-cursor text-primary'
        variant={variant}
        ref={textRef}
      />
    );
  }
);

TypeAnimation.displayName = 'TypeAnimation';

export default TypeAnimation;

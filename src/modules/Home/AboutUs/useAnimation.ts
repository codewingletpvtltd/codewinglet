import { useInView } from '@react-spring/web';
import { _config } from '@codewinglet/utils/useAnimation';

const useAnimation = () => {
  const [cardOneRef, cardOneSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: 100,
      y: 100,
    },
    to: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    config: _config,
  }));

  const [cardTwoRef, cardTwoSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: -100,
      y: 100,
    },
    to: {
      opacity: 1,
      x: 0,
      y: 20,
    },
    config: _config,
  }));

  const [cardThreeRef, cardThreeSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: 100,
      y: -100,
    },
    to: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    config: _config,
  }));

  const [cardFourRef, cardFourSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: -100,
      y: -100,
    },
    to: {
      opacity: 1,
      x: 0,
      y: 20,
    },
    config: _config,
  }));

  const [fromLeftRef, fromLeftSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: -100,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: _config,
  }));

  const [fromRightRef, fromRightSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: 100,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: _config,
  }));

  const [contentFromLeftRef, contentFromLeftSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: -100,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: _config,
  }));

  const [contentFromRightRef, contentFromRightSprings] = useInView(() => ({
    from: {
      opacity: 0,
      x: 100,
    },
    to: {
      opacity: 1,
      x: 0,
    },
    config: _config,
  }));

  return {
    cardOneRef,
    cardOneSprings,
    cardTwoRef,
    cardTwoSprings,
    cardThreeRef,
    cardThreeSprings,
    cardFourRef,
    cardFourSprings,
    fromLeftRef,
    fromLeftSprings,
    fromRightRef,
    fromRightSprings,
    contentFromLeftRef,
    contentFromLeftSprings,
    contentFromRightRef,
    contentFromRightSprings,
  };
};

export default useAnimation;

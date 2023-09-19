import { config, useInView } from '@react-spring/web';

export const _config = {
  ...config.default,
  duration: 700,
};

const useAnimation = () => {
  const [fadeRightRef, fadeRightSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    config: _config,
  }));

  const [fadeLeftRef, fadeLeftSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    config: _config,
  }));

  const [fadeTopRef, fadeTopSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(-100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    config: _config,
  }));

  const [fadeBottomRef, fadeBottomSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    config: _config,
  }));

  const [fadeOutRef, fadeOutSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'scale(-1)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
    config: _config,
  }));

  const [fadeInRef, fadeInSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'scale(1.3)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
    config: _config,
  }));

  return {
    fadeRightRef,
    fadeRightSprings,
    fadeLeftRef,
    fadeLeftSprings,
    fadeTopRef,
    fadeTopSprings,
    fadeBottomRef,
    fadeBottomSprings,
    fadeOutRef,
    fadeOutSprings,
    fadeInRef,
    fadeInSprings,
  };
};

export default useAnimation;

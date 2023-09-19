import { useInView } from '@react-spring/web';
import { _config } from '@codewinglet/utils/useAnimation';

const useAnimation = (delay: number) => {
  const [fadeLeftRef, fadeLeftSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    delay: delay,
    config: _config,
  }));

  return {
    fadeLeftRef,
    fadeLeftSprings,
  };
};

export default useAnimation;

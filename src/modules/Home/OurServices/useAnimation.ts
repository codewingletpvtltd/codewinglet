import { useInView } from '@react-spring/web';
import { _config } from '@codewinglet/utils/useAnimation';

const useAnimation = () => {
  const [cardOneRef, cardOneSprings] = useInView(() => ({
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

  return {
    cardOneRef,
    cardOneSprings,
  };
};

export default useAnimation;

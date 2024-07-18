import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CounterProps {
  endValue: number;
}

const AboutCounter: React.FC<CounterProps> = ({ endValue }) => {
  const [counter, setCounter] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 0,
      transition: { duration: 0.1 },
    });
  }, []);

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: { duration: 0.1 },
    });
    const interval = setInterval(() => {
      if (counter < endValue) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [counter, endValue]);

  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={controls}>
      {counter}
    </motion.div>
  );
};

export default AboutCounter;

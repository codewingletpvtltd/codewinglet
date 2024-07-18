'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%' | 'auto';
}

const Reveal = ({ children, width = 'auto' }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

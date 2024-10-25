import { useState, useEffect } from 'react';

interface CounterProps {
  endValue: number;
}

const AboutCounter: React.FC<CounterProps> = ({ endValue }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < endValue) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [counter, endValue]);

  return <>{counter}</>;
};

export default AboutCounter;

// pages/index.js

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

interface Props {
  number: any;
}

const Count: React.FC<Props> = ({ number }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='text-white'>
      {scrolled && <Counter endValue={number} />}
    </div>
  );
};

Count.propTypes = {
  number: PropTypes.any,
};

export default Count;

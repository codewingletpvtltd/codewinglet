/* eslint-disable import/order */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AboutCounter from './AboutCounter';

interface Props {
  number: any;
}

const AboutCount: React.FC<Props> = ({ number }: Props) => {
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
      {scrolled && <AboutCounter endValue={number} />}
    </div>
  );
};

AboutCount.propTypes = {
  number: PropTypes.any,
};

export default AboutCount;

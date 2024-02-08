import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import { techList } from './components/utils';

const settings = {
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  pauseOnHover: false,
  centerMode: true,
  draggable: false,
  arrows: false,
};

const InfiniteSlider = () => (
  <div className='py-8'>
    <Slider {...settings}>
      {techList.map((tech, index) => (
        <div key={index + 'abc'}>
          <Image
            alt='logo'
            src={tech.image}
            className='h-[30px] w-auto mx-12'
          />
        </div>
      ))}
    </Slider>
  </div>
);

export default InfiniteSlider;

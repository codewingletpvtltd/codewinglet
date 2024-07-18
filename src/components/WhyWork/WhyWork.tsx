import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { Arrow } from '@codewinglet/assets';
import Button from '../Button';
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import Typography from '../Typography';
import Statics from './Statics';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <Arrow
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: 'block',
          color: 'black',
          bottom: '-40px',
          left: '50px',
          top: 'auto',
          transform: 'unset',
        }}
      />
    </>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        color: 'black',
        transform: 'rotate(180deg)',
        bottom: '-40px',
        top: 'auto',
        left: '0',
      }}
    />
  );
}

const WhyWork = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2800,
    autoplaySpeed: 2800,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breckpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breckpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breckpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className='bg-bg xl:py-20 lg:py-14 md:py-[60px] py-10 why-work lg:!pb-24 overflow-hidden'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <Reveal>
          <SectionHeader
            title={<>Why work with us ?</>}
            description={
              <>
                Working with us offers unmatched knowledge and results-driven
                solutions
              </>
            }
          />
        </Reveal>
      </div>

      <div className='lg:mt-[50px] md:mt-10 mt-5 2xl:ml-[247.5px] lg:ml-[95px] ml-0 pl-[15px] lg:pt-0 pt-[25px] lg:flex border-t border-t-headerBoxBorder md:hidden'>
        <div className='2xl:w-[384px] w-full border-e border-e-headerBoxBorder pt-10 pr-10 lg:block hidden'>
          <Typography className='text-secondary text-subtitle2Light'>
            Optimized customized software solutions to empower your niche and
            strategic business growth.
          </Typography>
          <Button
            className='sm:w-[231px] w-[203px] h-12 2xl:mt-[50px] xl:mt-10 flex'
            variant='default'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Let's connect
              <Arrow />
            </Link>
          </Button>
        </div>

        <div className='relative slider-container 2xl:w-[1261px] w-full lg:pl-10 lg:pt-10 before:content before:absolute before:top-10 before:left-10 before:w-10 before:h-[329px] before:z-10'>
          <Slider {...settings}>
            <div className='bg-white p-[15px] !w-[302px]'>
              <Image
                src='/assets/comman/best-quality.png'
                alt='committed'
                width='272'
                height='160'
              />
              <Typography className='lg:text-subtitle2 text-tag pt-[15px] pb-2.5'>
                Best quality
              </Typography>
              <Typography className='text-placeholderText lg:text-paragraph2Light text-tagExtraLight'>
                Our track record of excellent work positions as the top choice
                for all your IT requirements.
              </Typography>
            </div>
            <div className='bg-white p-[15px] !w-[302px]'>
              <Image
                src='/assets/comman/committed.png'
                alt='committed'
                width='272'
                height='160'
              />
              <Typography className='lg:text-subtitle2 text-tag pt-[15px] pb-2.5'>
                Committed
              </Typography>
              <Typography className='text-placeholderText lg:text-paragraph2Light text-tagExtraLight'>
                We're committed to innovative IT solutions that meet clients
                expectations.
              </Typography>
            </div>
            <div className='bg-white p-[15px] !w-[302px]'>
              <Image
                src='/assets/comman/timely-support.png'
                alt='committed'
                width='272'
                height='160'
              />
              <Typography className='lg:text-subtitle2 text-tag pt-[15px] pb-2.5'>
                Timely support
              </Typography>
              <Typography className='text-placeholderText lg:text-paragraph2Light text-tagExtraLight'>
                Our support team is available whenever you need assistance,
                ensuring minimal downtime.
              </Typography>
            </div>
            <div className='bg-white p-[15px] !w-[302px]'>
              <Image
                src='/assets/comman/professional.png'
                alt='committed'
                width='272'
                height='160'
              />
              <Typography className='lg:text-subtitle2 text-tag pt-[15px] pb-2.5'>
                Professional
              </Typography>
              <Typography className='text-placeholderText lg:text-paragraph2Light text-tagExtraLight'>
                We're experts in IT, crafting professional solutions just for
                you with skill and care.
              </Typography>
            </div>
            <div className='bg-white p-[15px] !w-[302px]'>
              <Image
                src='/assets/comman/user-centered.png'
                alt='committed'
                width='272'
                height='160'
              />
              <Typography className='lg:text-subtitle2 text-tag pt-[15px] pb-2.5'>
                User centered
              </Typography>
              <Typography className='text-placeholderText lg:text-paragraph2Light text-tagExtraLight'>
                We focus on creating user-friendly designs to provide the best
                experience for everyone.
              </Typography>
            </div>
            <div className='bg-white p-[15px] !w-[302px]'>
              <Image
                src='/assets/comman/teamwork.png'
                alt='committed'
                width='272'
                height='160'
              />
              <Typography className='lg:text-subtitle2 text-tag pt-[15px] pb-2.5'>
                Teamwork
              </Typography>
              <Typography className='text-placeholderText lg:text-paragraph2Light text-tagExtraLight'>
                We values teamwork, crafting tailored solutions that excel and
                deliver top results.
              </Typography>
            </div>
          </Slider>
        </div>
      </div>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:hidden md:block hidden'>
        <Statics />
      </div>
    </div>
  );
};

export default WhyWork;

import {
  hero_slider,
  hero_slider2,
  hero_slider3,
  hero_slider4,
  hero_slider5,
  hero_slider6,
  hero_slider7,
  hero_slider8,
  hero_slider9,
  hero_slider10,
  hero_slider11,
  hero_slider12,
} from '@codewinglet/assets';

export const settings = {
  initialSlide: 0,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        initialSlide: 0,
      },
    },
  ],
};

export const techList = [
  {
    id: 1,
    image: hero_slider,
    bgColor: 'bg-[#DFFBFF]',
  },
  {
    id: 2,
    image: hero_slider2,
    bgColor: 'bg-[#E1F3EB]',
  },
  {
    id: 3,
    image: hero_slider3,
    bgColor: 'bg-[#F9E5E5]',
  },
  {
    id: 4,
    image: hero_slider4,
    bgColor: 'bg-[#EAF0E8]',
  },
  {
    id: 5,
    image: hero_slider5,
    bgColor: 'bg-[#FFEAF8]',
  },
  {
    id: 6,
    image: hero_slider6,
    bgColor: 'bg-[#F1F1F1]',
  },
  {
    id: 7,
    image: hero_slider7,
    bgColor: 'bg-[#DFEDF6]',
  },
  {
    id: 8,
    image: hero_slider8,
    bgColor: 'bg-[#FFF7D0]',
  },
  {
    id: 9,
    image: hero_slider9,
    bgColor: 'bg-[#FFF7D0]',
  },
  {
    id: 10,
    image: hero_slider10,
    bgColor: 'bg-[#FFF7D0]',
  },
  {
    id: 11,
    image: hero_slider11,
    bgColor: 'bg-[#FFF7D0]',
  },
  {
    id: 12,
    image: hero_slider12,
    bgColor: 'bg-[#FFF7D0]',
  },
];

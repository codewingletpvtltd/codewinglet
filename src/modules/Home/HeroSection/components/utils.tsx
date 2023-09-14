import {
  angular,
  graphql,
  javascriptIcon,
  nextjs,
  nodejs,
  react,
  typescriptIcon,
  vue,
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
    image: react,
    bgColor: 'bg-[#DFFBFF]',
  },
  {
    id: 2,
    image: vue,
    bgColor: 'bg-[#E1F3EB]',
  },
  {
    id: 3,
    image: angular,
    bgColor: 'bg-[#F9E5E5]',
  },
  {
    id: 4,
    image: nodejs,
    bgColor: 'bg-[#EAF0E8]',
  },
  {
    id: 5,
    image: graphql,
    bgColor: 'bg-[#FFEAF8]',
  },
  {
    id: 6,
    image: nextjs,
    bgColor: 'bg-[#F1F1F1]',
  },
  {
    id: 7,
    image: typescriptIcon,
    bgColor: 'bg-[#DFEDF6]',
  },
  {
    id: 8,
    image: javascriptIcon,
    bgColor: 'bg-[#FFF7D0]',
  },
];

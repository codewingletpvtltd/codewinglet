import {
  GraphQLPNG,
  angularPNG,
  javascriptPNG,
  nextJSPNG,
  nodeJSSVG,
  reactSVG,
  typescript,
  vuePNG,
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
    image: reactSVG,
    bgColor: 'bg-[#DFFBFF]',
  },
  {
    id: 2,
    image: vuePNG,
    bgColor: 'bg-[#E1F3EB]',
  },
  {
    id: 3,
    image: angularPNG,
    bgColor: 'bg-[#F9E5E5]',
  },
  {
    id: 4,
    image: nodeJSSVG,
    bgColor: 'bg-[#EAF0E8]',
  },
  {
    id: 5,
    image: GraphQLPNG,
    bgColor: 'bg-[#FFEAF8]',
  },
  {
    id: 6,
    image: nextJSPNG,
    bgColor: 'bg-[#F1F1F1]',
  },
  {
    id: 7,
    image: typescript,
    bgColor: 'bg-[#DFEDF6]',
  },
  {
    id: 8,
    image: javascriptPNG,
    bgColor: 'bg-[#FFF7D0]',
  },
];

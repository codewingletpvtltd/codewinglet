export const sliderConfig = {
  initialSlide: 2,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
      },
    },
  ],
};

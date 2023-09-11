export const sliderSettings = {
  initialSlide: 0,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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

export const getSliderSettings = (length: number) => ({
  initialSlide: 0,
  slidesToShow: 5,
  infinite: length >= 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
        infinite: length >= 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        initialSlide: 0,
        infinite: length >= 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        initialSlide: 0,
        infinite: length >= 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        initialSlide: 0,
        infinite: length >= 4,
      },
    },
  ],
});

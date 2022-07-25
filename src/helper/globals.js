export const MARQUEE_TEXT_REPEAT = 6;

export const DEFAULT_CAROUSEL_SLIDER_SETTINGS = {
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  variableWidth: true,
  touchThreshold: 100,
  swipeToSlide: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        dots: false,
      },
    },
  ],
};

export const TRENDING_CAROUSEL_SLIDER_SETTINGS = {
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  variableWidth: true,
  touchThreshold: 100,
  swipeToSlide: true,
};

export const SEE_MORE_CAROUSEL_SLIDER_SETTINGS = {
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  touchThreshold: 100,
  swipeToSlide: true,
};

export const DISCOVERY_DISPLAYED_ARTISTS_LIMIT = 4;

export const DISCOVERY_DISPLAYED_COLLECTIONS_LIMIT = 8;

export const REQUEST_DEBOUNCE_TIMEOUT_IN_MS = 1500;

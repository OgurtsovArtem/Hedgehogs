// import Swiper JS
// eslint-disable-next-line import/no-duplicates
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// eslint-disable-next-line import/no-duplicates
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.slider__cards', {
  // Optional parameters
  loop: true,
  direction: 'horizontal',
  // Navigation arrows
  navigation: {
    nextEl: '.button__next',
    prevEl: '.button__back',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 40,
      slidesOffsetBefore: -20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

export default swiper;

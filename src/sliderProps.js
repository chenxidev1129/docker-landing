import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade]);

export const heroSliderProps = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".indicators",
    clickable: true,
  },
};
export const hero9SliderProps = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  speed: 800,
  navigation: {
    nextEl: ".carousel-control-next",
    prevEl: ".carousel-control-prev",
  },
};
export const demoInnerPageProps = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
};
export const service3Props = {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
};
export const testimonial2Props = {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
};

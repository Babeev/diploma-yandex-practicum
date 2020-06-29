import "../pages/about.css";
import Swiper from 'swiper';

const mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    flipEffect: {
      rotate: 3,
      slideShadows: true,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,

    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 16
      },      
    },
  })
 
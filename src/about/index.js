import "../pages/about.css";
import Swiper from 'swiper';
import {load, githubApi, commitCardList, dataStorage} from "../js/constants/constants.js";

const mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    flipEffect: {
      rotate: 3,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,

    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },      
    },
});

load.commits(true);

function loadCommits() {
githubApi.getCommits()
  .then(result => {
    commitCardList.clear();
    let length = result.length;
    check(length, result);
  })
  .catch(err => {
    console.log(`Ошибка: ${err}`);
  });
}

function check(length, result) {
  if(length > 0) {
    dataStorage.toStorage(result, 'commits');
    commitCardList.render();
    load.commits(false);
  } else {
    dataStorage.clear();
  }
}
loadCommits();
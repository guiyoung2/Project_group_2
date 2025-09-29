"use strict";

// Adding scroll event listener
document.addEventListener("scroll", horizontalScroll);

//Selecting Elements
let sticky = document.querySelector(".sticky");
let stickyParent = document.querySelector(".sticky-parent");

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight =
  stickyParent.getBoundingClientRect().height -
  sticky.getBoundingClientRect().height;

//Scroll function
function horizontalScroll() {
  //Checking whether the sticky element has entered into view or not
  let stickyPosition = sticky.getBoundingClientRect().top;
  // if (stickyPosition > 1) {
  //   return;
  // } else {
  //   let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
  //   sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.55;
  // }

  let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
  sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.1;
}

// 모바일 bxslider
$(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    responsive: true,
    slideWidth: 1100,
    auto: true,
    controls: false,
    pager: false,
  });
});

$(function () {
  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let topBar = Math.round($(".top_bar").offset().top);
    let topText = Math.round($(".top_txt").offset().top);
    let b_logo = $("header > h1");
    let c_black = $(".menu > li > a");
    let bg_w = $("header");

    if (topBar + 120 >= topText) {
      b_logo.addClass("b_logo");
      c_black.addClass("c_black");
      bg_w.addClass("bg_w");
    } else {
      b_logo.removeClass("b_logo");
      c_black.removeClass("c_black");
      bg_w.removeClass("bg_w");
    }
  });

  let value_bg = $(".lush_value");
  let value1 = $(".value_icon1");
  let value2 = $(".value_icon2");
  let value3 = $(".value_icon3");
  let value4 = $(".value_icon4");
  let value5 = $(".value_icon5");
  let value6 = $(".value_icon6");

  value1.on("mouseover", function () {
    value_bg.css("background", `url("image/value1_bg.jpeg")`);
    value_bg.css("background-size", "cover");
  });
  value1.on("mouseleave", function () {
    value_bg.css("background", "");
  });
  value2.on("mouseover", function () {
    value_bg.css("background", `url("image/value2_bg.jpeg")`);
    value_bg.css("background-size", "cover");
  });
  value2.on("mouseleave", function () {
    value_bg.css("background", "");
  });
  value3.on("mouseover", function () {
    value_bg.css("background", `url("image/value3_bg.jpeg")`);
    value_bg.css("background-size", "cover");
  });
  value3.on("mouseleave", function () {
    value_bg.css("background", "");
  });
  value4.on("mouseover", function () {
    value_bg.css("background", `url("image/value4_bg.jpeg")`);
    value_bg.css("background-size", "cover");
  });
  value4.on("mouseleave", function () {
    value_bg.css("background", "");
  });
  value5.on("mouseover", function () {
    value_bg.css("background", `url("image/value5_bg.jpeg")`);
    value_bg.css("background-size", "cover");
  });
  value5.on("mouseleave", function () {
    value_bg.css("background", "");
  });
  value6.on("mouseover", function () {
    value_bg.css("background", `url("image/value6_bg.jpeg")`);
    value_bg.css("background-size", "cover");
  });
  value6.on("mouseleave", function () {
    value_bg.css("background", "");
  });
});
/* main 카테고리소개 > 상품이미지 */
const $lushProSwiper = $(".lush_pro_swiper");
const lushProSwiperAllay = [];

$lushProSwiper.each(function () {
  const autoSwiper = new Swiper(this, {
    slidesPerView: "auto",
    /* loop:true, */
    /* slidesPerGroup:3, */
    grabCursor: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    on: {
      reachEnd: function () {
        categorySwiper.slideNext();
      },
    },
  });
  $(".lush_pro_swiper .swiper-slide").on("mouseenter", function () {
    autoSwiper.autoplay.stop();
  });
  $(".lush_pro_swiper .swiper-slide").on("mouseleave", function () {
    autoSwiper.autoplay.start();
  });
  lushProSwiperAllay.push(autoSwiper);
});

// main 카테고리소개 > 상품이미지 초기화
function lushProSwiperInitiator() {
  lushProSwiperAllay.forEach(function (eachSWiper) {
    eachSWiper.autoplay.stop();
  });
}
lushProSwiperInitiator();

// main 카테고리소개
const categorySwiper = new Swiper(".lush_category_swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,
  grabCursor: true,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      lushProSwiperInitiator();
      lushProSwiperAllay[categorySwiper.realIndex].slideTo(0, 0, false);
      lushProSwiperAllay[categorySwiper.realIndex].autoplay.start();
    },
  },
});

// main 카테고리 소개 scroll autoplay.start 제어
const swiperElement = $(".lush_category_swiper");
if (swiperElement.length > 0) {
  let scrollTop = 0;
  const swiperPosition = swiperElement.offset().top;
  $(window).on("scroll", function () {
    scrollTop = $(this).scrollTop();
    if (scrollTop >= swiperPosition - 600) {
      lushProSwiperAllay[0].autoplay.start();
    }
  });
}

var swiper = new Swiper(".swiperBanner", {
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper2 = new Swiper(".swiperKota", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
});

var swiper3 = new Swiper(".swiperHiburan", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
});
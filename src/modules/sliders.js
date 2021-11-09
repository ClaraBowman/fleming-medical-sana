// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

/**
 * Function to initialize the site's SwiperJS sliders.
 */
export default function sliders() {
  // The LifeSense app screenshot slider.
  if (document.getElementById("app-slider")) {
    new Swiper("#app-slider", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  }

  // The slider introducing the training academy.
  if (document.getElementById("training-slider")) {
    new Swiper("#training-slider", {
      loop: true,
      autoplay: {
        delay: 3500,
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
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    });
  }

  // The slider for the BLS course.
  if (document.getElementById("bls-slider")) {
    new Swiper("#bls-slider", {
      loop: true,
      autoplay: {
        delay: 5000,
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
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    });
  }

  // The slider for the careers page.
  if (document.getElementById("employee-testimonials-slider")) {
    new Swiper("#employee-testimonials-slider", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // The testimonials cube slider.
  if (document.getElementById("testimonial-cube")) {
    new Swiper("#testimonial-cube", {
      loop: false,
      pagination: {
        el: ".swiper-pagination",
      },
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
  }

  // The marketing calendar slider.
  if (document.getElementById("marketing-calendar")) {
    new Swiper("#marketing-calendar", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    });
  }
}

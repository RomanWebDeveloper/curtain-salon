
  /* Slick*/

  $(document).ready(function(){
    $('.intro__slider').slick({
      arrows:false,
      dots:true,
      slidesToShow:3,
      autoplay:true,
      speed: 700,
      responsive:[
      {
        breakpoint: 920,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  $(document).ready(function(){
    $('.best__slider').slick({
      arrows:false,
      dots:true,
      slidesToShow:2,
      autoplay:true,
      speed: 700,
      responsive:[
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  $(document).ready(function(){
    $('.reviews__slider').slick({
      arrows:false,
      dots:false,
      slidesToShow:3,
      autoplay:true,
      speed: 900,
      responsive:[
      {
        breakpoint: 920,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  $(document).ready(function(){
    $('.blog__slider').slick({
      arrows:false,
      dots:false,
      slidesToShow:3,
      autoplay:true,
      speed: 700,
      responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow:1
        }
      }
    ]
    });
  });

  /* Menu*/

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })


    /* Swiper */

  window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 568px)',
    '.slider-1',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
    },
    someFunc
  );
});
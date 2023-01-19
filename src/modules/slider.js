import Swiper, {
  Navigation,
  Grid
} from 'swiper';




const slider = () => {
  const swiper = new Swiper('.benefits-inner', {
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.benefits__arrow--right ',
      prevEl: '.benefits__arrow--left ',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      576: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3,
        allowTouchMove: false,
      }
    }
  })

  const swiper2 = new Swiper('.container.swiper', {
    modules: [Navigation, Grid],
    navigation: {
      nextEl: '.services__arrow--right ',
      prevEl: '.services__arrow--left ',
    },
    loop: true,
    breakpoints: {
      320: {
        loop: true,
        slidesPerView: 1,
        allowTouchMove: true,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: false,
        grid: {
          fill: 'row',
          rows: 2
        },
      },
      1200: {
        loop: true,
        slidesPerView: 2,
        allowTouchMove: false,
      }
    }
  })
}

export default slider
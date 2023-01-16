import Swiper, {Autoplay} from "swiper"

const slider = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    modules: [Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  })
}

export default slider
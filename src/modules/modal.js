import {
  animate
} from "./helpers";

const modal = () => {
  const header = document.getElementById('header')
  const headerModal = document.querySelector('.header-modal')
  const servicesModal = document.querySelector('.services-modal')
  const overlay = document.querySelector('.overlay')
  const services = document.getElementById('services')
  const smoothScroll = document.querySelector('.smooth-scroll')
  const photo = document.querySelector('modal-window')

  const blockBody = () => {
    const body = document.body;
    body.style.overflow = 'hidden';
    const bodyScroll = calcScroll();
    body.style.marginRight = `${bodyScroll}px`;
  }
  const unBlockBody = () => {
    const body = document.body;
    body.style.overflow = 'auto';
    body.style.marginRight = `0`;
  }
  const calcScroll = () => {
    let div = document.createElement('div');
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  const modalAnimate = (e) => {
    e.style.left = 0
    e.style.transform = `transform: translateX(-50%);`
    e.style.display = "flex"
    smoothScroll.style.display = "none"
    animate({
      duration: 700,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        e.style.left = progress * 50 + '%';
      }
    });
    blockBody();
  }


  header.addEventListener('click', (e) => {
    if (e.target.closest('.fancyboxModal')) {
      overlay.style.display = "flex"
      modalAnimate(headerModal)
    }
  })
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.header-modal__close') || e.target.closest('.overlay') || e.target.closest('.services-modal__close')) {
      unBlockBody();
      headerModal.style.display = "none"
      headerModal.style.left = 'auto'
      servicesModal.style.display = "none"
      servicesModal.style.left = 'auto'
      overlay.style.display = "none"
      smoothScroll.style.display = "block"
      
    }
  })
  services.addEventListener('click', (e) => {
    if (e.target.closest('.service-button')) {
      overlay.style.display = "flex"
      modalAnimate(servicesModal)

    }
  })



}

export default modal
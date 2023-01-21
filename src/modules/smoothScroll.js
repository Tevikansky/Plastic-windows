
const smoothScroll = () => {
  const offerTop = document.getElementById('offer').offsetTop;
  const offerHeight = document.getElementById('offer').offsetHeight;
  const button = document.querySelector('.smooth-scroll')
  button.style.display = 'none'
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > (offerTop + offerHeight)) {
      button.style.display = 'flex';
      button.style.cursor = "pointer";
      button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      })

    } else {
      button.style.display = 'none'
    }

  })




}

export default smoothScroll
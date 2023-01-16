const modal = () => {
  const header = document.getElementById('header')
  const headerModal = document.querySelector('.header-modal')
  const overlay = document.querySelector('.overlay')

  header.addEventListener('click', (e) => {
    if (e.target.closest('.fancyboxModal')) {
      headerModal.style.display = "flex"
      overlay.style.display = "flex"
    }
  })
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.header-modal__close') || e.target.closest('.overlay')) {
      headerModal.style.display = "none"
      overlay.style.display = "none"
    }
  })



}

export default modal
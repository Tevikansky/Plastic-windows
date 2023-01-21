const sertificates = () => {
  const documents = document.getElementById('documents')
  const overlay = document.querySelector('.overlay')


  documents.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.className === "document-overlay") {
      const photo = document.createElement('div');
      photo.classList.add('modal-window')
      photo.style =
        `position: fixed;
     top: 50%;
     left: 50%;
     z-index: 9999;
     transform: translate(-50%, -50%);`;
      photo.innerHTML = `
  <img src="./images/documents/original/document4.jpg" style="height: 100vh" alt="">
  <span style=" position: fixed; top: 1%; left: 102%; font-size: 22px; cursor: pointer; background: white; border: 1px solid orange; color: orange; padding-top: 4px; padding-bottom: 7px; padding-left: 10px; padding-right: 10px; border-radius: 20px;">x</span>`
      overlay.style.display = "flex"
      document.body.append(photo)
      document.body.addEventListener('click', (e) => {
        if ( e.target.className === "overlay" || e.target.nodeName === 'SPAN') {
          photo.remove()
          overlay.style.display = "none"
        }
      })
    }
    

  })
}

export default sertificates
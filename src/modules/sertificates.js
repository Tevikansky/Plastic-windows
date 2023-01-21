const sertificates = () => {
const documents = document.getElementById('documents')


documents.addEventListener('click', (event)=> {
  event.preventDefault();
  if (event.target.className === "document-overlay") {
const photo = document.createElement('div');
photo.innerHTML = `<div class="services-modal--opened">
<div class="fancybox-skin" style="padding: 0px; width: auto; height: auto;">
  <div class="fancybox-outer">
  <img src="./images/documents/original/document4.jpg" alt="">
  </div>
  <span title="Close" class="services-modal__close">x</span>
</div>
</div>`
document.body.append(photo)
// event.target.parentNode.childNodes[1].src = "./images/documents/original/document4.jpg"
  }
})
}

export default sertificates
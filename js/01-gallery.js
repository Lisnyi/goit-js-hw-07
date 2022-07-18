import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")

const galleryMarkup = galleryItems.map(item =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`).join("")

galleryRef.innerHTML = galleryMarkup

galleryRef.addEventListener("click", onGalleryCardClick)

function onGalleryCardClick (e) {
  if (e.target.nodeName !== "IMG"){
    return
  }
  e.preventDefault()
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
  instance.show()
    
  window.addEventListener("keydown", closeModalByEscape) 
  
  function closeModalByEscape(e) {
    const keyName = e.key
    if (keyName !== "Escape") {
      return
    }
    instance.close()
    
    window.removeEventListener("keydown", closeModalByEscape)
  }
}
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")

const galleryMarkup = galleryItems.map(({original, preview, description}) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`).join("")

galleryRef.innerHTML = galleryMarkup

galleryRef.addEventListener("click", clickOnGalleryCard)

function clickOnGalleryCard (e) {
  if (e.target.nodeName !== "IMG"){
    return
  }
  e.preventDefault()
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
  instance.show()
    
  window.addEventListener("keydown", closeModalByEscape) 
  
  function closeModalByEscape({key}) {
    const keyName = key
    if (keyName !== "Escape") {
      return
    }
    instance.close()
    
    window.removeEventListener("keydown", closeModalByEscape)
  }
}
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")

const galleryMarkup = galleryItems.map(item => `<div class="gallery__item">
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

function onGalleryCardClick (e) {
    if (e.target.nodeName !== "IMG"){
        return
    }
    e.preventDefault()
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`)
    instance.show()
    instance.close((e)=>console.log(e))
}

galleryRef.addEventListener("click", onGalleryCardClick)


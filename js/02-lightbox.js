import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")

const galleryMarkup = galleryItems.map(({original, preview, description}) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a>`)
    .join("")

galleryRef.innerHTML = galleryMarkup

let gallery = new SimpleLightbox(`.gallery a`)
gallery.options.captionsData = "alt"
gallery.options.captionDelay = 250

function clickOnGalleryCard(e) {
    if (e.target.nodeName !== "IMG") {
        return
    }
    e.preventDefault()
}

galleryRef.addEventListener ("click", clickOnGalleryCard)
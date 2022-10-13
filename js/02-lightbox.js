import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = galleryItems.map((items) => {
  return `<li>
    <a class="gallery__item" 
        href="${items.original}" 
        onclick="event.preventDefault()">
      <img class="gallery__image" 
        src="${items.preview}" 
        alt="${items.description}" />
    </a>
    </li>`;
});

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup.join(""));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = galleryItems.map((eItems) => {
  return `<li>
    <a class="gallery__item" 
        href="${eItems.original}" 
        onclick="event.preventDefault()">
      <img class="gallery__image" 
        src="${eItems.preview}" 
        alt="${eItems.description}" />
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

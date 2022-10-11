import { galleryItems } from "./gallery-items.js";
// Change code below this line
 const galleryMarkup = galleryItems.map((eItems) => {
    return ` <div class="gallery__item">
    <a 
        class="gallery__link" 
        href="${eItems.original}">
      <img
        class="gallery__image"
        src="${eItems.preview}"
        data-source="${eItems.original}"
        alt="${eItems.description}"
      />
    </a>
  </div>`
})
//  console.log(galleryItems);
//  console.log(galleryMarkup);
const artGallery = document.querySelector(".gallery");
artGallery.insertAdjacentHTML("afterbegin", galleryMarkup.join(""));
// console.log(artGallery);

let modal;
function clickElemGallPict () {
    document.addEventListener("keydown", escListener);
}
artGallery.addEventListener("click", (evt) => {
    const clickTarget = evt.target;
    if(!clickTarget.classList.contains("gallery__image")){
        return;
    }
    const imageSrc = clickTarget.dataset.sourse;
    const imageAlt = clickTarget.alt;
    modal = basicLightbox.create(`<img src="${imageSrc}" alt="${imageAlt}" />`);
    modal.show();
    clickElemGallPict();
});
function clickElemGallPictOff (){
    documen.remuveEventListener("keydown", escListener);
}
function escListener(evt) {
    if( evt.key === "Escape"){
        modal.close();
        clickElemGallPictOff();
    }
}
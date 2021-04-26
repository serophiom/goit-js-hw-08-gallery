import gallery from './gallery-items.js';

const galleryUlRef = document.querySelector('.js-gallery');
console.log(galleryUlRef);

// gallery.map(image => {
//   galleryUlRef.insertAdjacentHTML('beforeend', `<li class="gallery__item"><a class= "gallery__link" href ="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a></li>`);
  
// })

function createGallery = gallery.map(image => {
const galleryRef = `<li class="gallery__item">
<a class="gallery__link"
href="${image.original}">
<img class="gallery__image"
src="${image.preview}"
data-source = "${image.original}"
alt="image.description">
</a>
</li>`;
console.log(galleryRef);
return galleryRef;
});

const createGalleryRefs = 




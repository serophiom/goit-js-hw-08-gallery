import gallery from './gallery-items.js';
console.log(gallery);
const galleryUlRef = document.querySelector('.js-gallery');
console.log(galleryUlRef);

const createGalleryRefs = createGallery(gallery);

galleryUlRef.insertAdjacentHTML('beforeend', createGalleryRefs);



function createGallery(gallery) {
return gallery.map(({original, preview, description} = {}) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="image.description">
</a>
</li>`
})
.join('');
};








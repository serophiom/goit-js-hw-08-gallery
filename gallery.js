import gallery from './gallery-items.js';
console.log(gallery);
const galleryUlRef = document.querySelector('.js-gallery');
console.log(galleryUlRef);
const modalRef = document.querySelector('.js-lightbox');
console.log(modalRef);
const btnCloseModal = document.querySelector('[data-action="close-lightbox"]');
console.log(btnCloseModal);

const createGalleryRefs = createGallery(gallery);

galleryUlRef.insertAdjacentHTML('beforeend', createGalleryRefs);

galleryUlRef.addEventListener('click', onOpenModal);

btnCloseModal.addEventListener('click', onCloseModal);

// const getOriginalImage = galleryUlRef.addEventListener('click', onTargetCkick);

// function onTargetCkick () {
//     const originalImage = gallery.querySelector('data-resource');
//     console.log(originalImage);
// }

function onOpenModal (event) {
    const isGalleryItemRef = event.target.classList.contains('gallery__item');
    if (!isGalleryItemRef) {
        return;
    }
  modalRef.classList.add('is-open');
}

function onCloseModal () {
    modalRef.classList.remove('is-open');
}

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








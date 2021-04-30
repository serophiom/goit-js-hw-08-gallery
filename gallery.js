import gallery from './gallery-items.js';
console.log(gallery);
const galleryUlRef = document.querySelector('.js-gallery');
console.log(galleryUlRef);
const modalRef = document.querySelector('.js-lightbox');
console.log(modalRef);
const btnCloseModal = document.querySelector('[data-action="close-lightbox"]');
console.log(btnCloseModal);
const modalImageRef = document.querySelector('.lightbox__image');
console.log(modalImageRef);
const createGalleryRefs = createGallery(gallery);
const overlayRef = document.querySelector('.lightbox__overlay');
console.log(overlayRef);

galleryUlRef.insertAdjacentHTML('beforeend', createGalleryRefs);

galleryUlRef.addEventListener('click', onOpenModal);

btnCloseModal.addEventListener('click', onCloseModal);
overlayRef.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onCloseModal);

function closeModalEscape (event) {
    
}

function onOpenModal (event) {
    const isGalleryItemRef = event.target.classList.contains('gallery__image');
    if (!isGalleryItemRef || event.currentTarget === event.target) {
        console.log('AGA');
        return;
    }
  modalRef.classList.add('is-open');
  modalImageRef.src = event.target.dataset.source;
  modalImageRef.alt = event.target.alt;
  console.log(modalImageRef.src);
}

function onCloseModal () {
    modalRef.classList.remove('is-open');
    modalImageRef.src = '';
    console.log(modalImageRef.src);
}

function createGallery(gallery) {
return gallery.map(({original, preview, description} = {}) => {
return `<li class="gallery__item">

<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}">

</li>`
})
.join('');
};

// <a class="gallery__link" href="${original}"></a>
// </a>







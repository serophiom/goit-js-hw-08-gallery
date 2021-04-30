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
overlayRef.addEventListener('click', onOverlayClick);
window.addEventListener('keydown', onEscapeKeyPress);

function closeModalEscape (event) {
    
}

function onOpenModal (event) {
    window.addEventListener('keydown', onEscapeKeyPress);
    event.preventDefault();
    const isGalleryItemRef = event.target.classList.contains('gallery__image');
    if (!isGalleryItemRef) {
        console.log('AGA');
        return;
    }
  modalRef.classList.add('is-open');
  modalImageRef.src = event.target.dataset.source;
  modalImageRef.alt = event.target.alt;
  console.log(modalImageRef.src);
}

function onCloseModal () {
    window.removeEventListener('keydown', onEscapeKeyPress);
    modalRef.classList.remove('is-open');
    modalImageRef.src = '';
    console.log(modalImageRef.src);
}

function onOverlayClick (event) {
    if (event.currentTarget === event.target) {
        onCloseModal ();
    }
}

function onEscapeKeyPress (event) {
    console.log(event.code);
    // ArrowRight
    // ArrowLeft
    if (event.code === 'Escape') {
        onCloseModal ();
    }

    if (event.code === 'ArrowRight') {
        console.log(gallery[1]);
        const i = 1
        // console.log('Right');
        modalImageRef.src = gallery[i+1].original;
        // console.log(modalImageRef.src);
    }

    if (event.code === 'ArrowLeft') {
        console.log('Left');
    }
}

// function onArrowKeyPress (event) {
//     console.log(event.code);
// }

function createGallery(gallery) {
return gallery.map(({original, preview, description, index} = {}) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
data-index="${index}"
alt="${description}">
</a>
</li>`
})
.join('');
};

// <a class="gallery__link" href="${original}"></a>
// </a>
// || event.currentTarget === event.target







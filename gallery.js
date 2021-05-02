import gallery from './gallery-items.js';
const imageArray = [];

const refs = {
    galleryUlRef: document.querySelector('.js-gallery'),
    modalRef: document.querySelector('.js-lightbox'),
    btnCloseModal: document.querySelector('[data-action="close-lightbox"]'),
    modalImageRef: document.querySelector('.lightbox__image'),
    createGalleryRefs: createGallery(gallery),
    overlayRef: document.querySelector('.lightbox__overlay'),
}

refs.galleryUlRef.insertAdjacentHTML('beforeend', refs.createGalleryRefs);

refs.galleryUlRef.addEventListener('click', onOpenModal);

refs.btnCloseModal.addEventListener('click', onCloseModal);

refs.overlayRef.addEventListener('click', onOverlayClick);

function onOpenModal (event) {
    window.addEventListener('keydown', onEscapeKeyPress);
    event.preventDefault();
    const isGalleryItemRef = event.target.classList.contains('gallery__image');
    if (!isGalleryItemRef) {
        return;
    }
  refs.modalRef.classList.add('is-open');
  refs.modalImageRef.src = event.target.dataset.source;
  refs.modalImageRef.alt = event.target.alt;
}

function onCloseModal () {
    window.removeEventListener('keydown', onEscapeKeyPress);
    refs.modalRef.classList.remove('is-open');
    refs.modalImageRef.src = '';
}

function onOverlayClick (event) {
    if (event.currentTarget === event.target) {
        onCloseModal ();
    }
}

function onEscapeKeyPress (event) {
    if (event.code === 'Escape') {
        onCloseModal ();
    }

    if (event.code === 'ArrowRight') {
        if (imageArray.indexOf(refs.modalImageRef.src) === imageArray.length - 1) {
            return;
        }
        refs.modalImageRef.src = imageArray[imageArray.indexOf(refs.modalImageRef.src) + 1];
    }

    if (event.code === 'ArrowLeft') {
        if (imageArray.indexOf(refs.modalImageRef.src) === 0) {
            return;
        }
        refs.modalImageRef.src = imageArray[imageArray.indexOf(refs.modalImageRef.src) - 1];
    }
}

function createGallery(gallery) {
    return gallery.map(({original, preview, description, index} = {}) => {
    imageArray.push(`${original}`);

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
}
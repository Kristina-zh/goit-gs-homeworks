'use strict'

// Задание
// Необходимо динамически создать элементы галереи по указанному шаблону.
// При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. Обязательно используй делегирование событий и слушай клики на элементе ul.gallery.
// Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], по клику на div.overlay или по нажатию ESC.
// Стартовые файлы
// В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.

// В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оргининальное и описание.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки.

import gallery from './gallery-items.js';

const galleryUl = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');

function addImages(gallery, ref) {
  
  const markup = gallery.reduce((acc, el) => {
    const li = `
    <li class="gallery__item">
    <a
    class="gallery__link"
    >
    <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"
    />
    
    <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
    </span>
    </a>
    </li>
    `; 
    return acc += li;
  }, "");
  console.log('markup__________ :', markup);
  ref.insertAdjacentHTML('beforeend', markup);
}

addImages(gallery, galleryUl);

galleryUl.addEventListener('click', function(e) {
  if(e.target.nodeName === 'IMG') {
    lightbox.classList.add('is-open');
    const lightboxImage = lightbox.querySelector('.lightbox___image');
    lightboxImage.setAttribute('src', e.target.dataset.source);
    lightboxImage.setAttribute('alt', e.target.alt);
  }

  });

  lightbox.addEventListener('click', function(e){
    lightbox.classList.add('is-open');
  
    if(e.target.nodeName !== 'IMG') {
      lightbox.classList.remove('is-open')
    }
  })

    
  window.addEventListener('keydown', function(e) {
    if(
      e.keyCode === 27 &&
      lightbox.classList.contains('is-open')
      ) {
        lightbox.classList.remove('is-open');     
      }
  })

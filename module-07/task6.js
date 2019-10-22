'use strict'

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationInput = document.querySelector('#validation-input');

// console.log(validationInput.dataset.length);

validationInput.addEventListener('blur', () => {
    if(validationInput.value.length !== +validationInput.dataset.length) {
      validationInput.classList.add('invalid');
  } else {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } 
})

validationInput.addEventListener('focus', () => {
  if(validationInput.classList.contains('invalid')) {
    validationInput.classList.remove('invalid');
} else {
  validationInput.classList.remove('valid');
}
})
'use strict'

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');



nameInput.addEventListener('input', () => {
  nameOutput.textContent = '';
  nameOutput.textContent = nameOutput.textContent + nameInput.value;
  
  if(nameInput.value === '') {
    nameOutput.textContent = "незнакомец!"
  }
  // console.log(nameInput.value);
})



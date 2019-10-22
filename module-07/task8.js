'use strict'

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controls = document.querySelector('#controls');
const input = document.querySelector('input');
console.log(input);
const render = document.querySelector('[data-action ="render"]');
const destroy = document.querySelector('[data-action ="destroy"]');

const boxes = document.querySelector('#boxes');
console.log(boxes);
let width = 30;
let height = 30;

render.addEventListener('click', () => {
  console.log(input.value);
  if (controls.textContent !== ''){
  for(let i = 0; i < Number(input.value); i +=1) {
   createBoxes(); }}
}); 

destroy.addEventListener('click', () => {
  destroyBoxes();
});


function createBoxes() {

  let r = Math.round(Math.random()*255);
  let g = Math.round(Math.random()*255);
  let b = Math.round(Math.random()*255);

  const div = document.createElement('div');
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  width+=10;
  height+=10;
  boxes.append(div);
}

function destroyBoxes() {
  console.dir(boxes);
  boxes.innerHTML = "";
  width = 30;
  height = 30;
}

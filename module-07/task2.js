'use strict'

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document
  .querySelector('#ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  fragment.append(li);
});

list.appendChild(fragment);





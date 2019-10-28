'use strict'

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector('#value');

let value = 10;
counterValue.textContent = value

const decr = document.querySelector('[data-action="decrement"]')
decr.addEventListener('click', () => counterValue.textContent = value -= 1);

const incr = document.querySelector('[data-action="increment"]')
incr.addEventListener('click', () => counterValue.textContent = value += 1);




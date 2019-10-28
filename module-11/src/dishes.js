import menu from './menu.json';
import menuTemplate from './template/dish.hbs';

const refs = {
  menuUl: document.querySelector('#menu'),
  switch: document.querySelector('.switch'),
  body: document.querySelector('body'),
}

// const markup = menuTemplate(menu[0]);
// console.log(markup)

const menuItems = JSON.stringify(menuTemplate(menu));

const dishes = JSON.parse(menuItems);

refs.menuUl.insertAdjacentHTML('beforeend', dishes);

refs.body.classList.add('light-theme');

refs.switch.addEventListener('change', () => {
  if(refs.body.classList.contains('light-theme')) {
    refs.body.classList.replace('light-theme','dark-theme');
  } else {
    refs.body.classList.replace('dark-theme','light-theme');
  }

  localStorage.setItem('theme', refs.body.classList);
})

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme)
refs.body.className = currentTheme;


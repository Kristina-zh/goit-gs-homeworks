import menu from './menu.json';
import menuTemplate from './template/dish.hbs';

const refs = {
  menuUl: document.querySelector('#menu'),
  switch: document.querySelector('.switch__input'),
  body: document.querySelector('body'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuItems = JSON.stringify(menuTemplate(menu));

const dishes = JSON.parse(menuItems);

refs.menuUl.insertAdjacentHTML('beforeend', dishes);

// refs.body.classList.add(Theme.LIGHT);

refs.switch.addEventListener('change', (e) => {
  if(e.target.checked) {
  // if(refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }

  localStorage.setItem('theme', refs.body.classList);
})

const currentTheme = localStorage.getItem('theme');
if(currentTheme)
refs.body.className = currentTheme;

if(currentTheme === Theme.DARK)
refs.switch.checked = true;

'use strict'

// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.


class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    // this.refs = {
    //   // days: document.querySelector('[data-value="days"]'),
    //   // hours: document.querySelector('[data-value="hours"]'),
    //   // mins: document.querySelector('[data-value="mins"]'),
    //   // secs: document.querySelector('[data-value="secs"]'),
    // };
  }
    
  
  getTimer() {
    this.timerId = setInterval( () => {
    const time = this.targetDate - Date.now();

    const daysNumber = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hoursNumber = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minsNumber = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secsNumber = pad(Math.floor((time % (1000 * 60)) / 1000));

    // this.refs.days.textContent = daysNumber;
    // this.refs.hours.textContent = hoursNumber;
    // this.refs.mins.textContent = minsNumber;
    // this.refs.secs.textContent = secsNumber;

    document.querySelector('.timer').innerHTML = `<div class="days"><div class="numbers"> ${daysNumber} </div></div>
    <div class="hours"><div class="numbers"> ${hoursNumber} </div></div>
    <div class="minutes"><div class="numbers"> ${minsNumber} </div></div>
    <div class="seconds"><div class="numbers"> ${secsNumber} </div></div>`;

    }, 1000);
  } 
}
  
function pad(value) {
  return String(value).padStart(2,'0');
}   
      
const t = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 15, 2019'),
});

t.getTimer();


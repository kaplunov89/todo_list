'use strict';
const input = document.querySelector('#input-main');
const ul = document.querySelector('.list');
let li = document.querySelectorAll('.list li');
const arrowBtn = document.querySelector('#arrow-btn');
let select = document.querySelector('.checkbox-class');

let tasks = [];

input.addEventListener('keypress', function (event) {
  if (input.value === '') {
    document.querySelector('#input-main').placeholder = 'Введите задачу...';
  } else {
    if (event.key === 'Enter') {
      newTask();
    }
  }
});

let newTask = () => {
  if (input.value !== '') {
    let task = document.createElement('li'),
      link = document.createElement('a'),
      newTask = input.value;
    task.innerHTML = newTask;
    link.appendChild(task);
    ul.appendChild(link);
    input.value = '';

    //Кнопка удалить
    let span = document.createElement('SPAN'),
      spanText = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(spanText);
    link.appendChild(span);

    let filter = document.querySelector('.filter-list');
    filter.style.display = 'flex';

    //Чекбоксы
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox-class';
    checkbox.id = 'checkbox-id';
    link.appendChild(checkbox);
    ul.appendChild(link);

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        task.style.textDecoration = 'line-through';
      } else {
        task.style.textDecoration = 'none';
      }
    });

    //Всего задач
    let list = document.querySelectorAll('.list > a');
    tasks.push(list);

    updateCount();

    //Функция удаления задачи
    span.addEventListener('click', function (event) {
      if (event.target.tagName === 'SPAN') {
        let close = event.target.parentNode;
        close.remove();
        tasks.splice(tasks.indexOf(list), 1);
        updateCount();
      }
    });
  }
};

// Счетчик задач
function updateCount() {
  let allTask = document.querySelector('.all-count');
  let count = tasks.length;
  allTask.textContent = `Всего задач: ${[count]}`;
}

//Выделение все задач//
arrowBtn.addEventListener('click', () => {
  let arrowBtn = document.getElementById('arrow-btn');
  let check = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < check.length; i++) {
    if (arrowBtn) {
      check[i].checked = true;
    }
  }
});

// checkbox.addEventListener('click', function (event) {
//   if (event.target.id === 'checkbox-id') {
//     let lineTask = event.target.parentNode;
//     lineTask.style.textDecoration = 'line-through';
//   } else if (checkbox.checked === false) {
//     lineTask.style.textDecoration = 'none';
//   }
// });

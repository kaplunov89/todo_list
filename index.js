'use strict';
const input = document.querySelector('#input-main');
const ul = document.querySelector('.list');
let li = document.querySelectorAll('.list li');
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
    checkbox.id = 'checkbox-id';
    link.appendChild(checkbox);
    ul.appendChild(link);
    //Всего задач
    let allTask = document.querySelector('.all-count'),
      list = document.querySelectorAll('.list > a');
    tasks.push(list);

    // -------------- Дописано:
    updateCount();

    //Функция удаления задачи
    span.addEventListener('click', function (event) {
      if (event.target.tagName === 'SPAN') {
        let close = event.target.parentNode;
        close.remove();

        // -------------- Дописано:
        tasks.splice(tasks.indexOf(list), 1);
        updateCount();
      }
    });
  }
};

// -------------- Дописано:
function updateCount() {
  let allTask = document.querySelector('.all-count');
  let count = tasks.length;
  allTask.textContent = `Всего задач: ${[count]}`;
}

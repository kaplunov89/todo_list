'use strict';
const input = document.querySelector('#input-main');
const ul = document.querySelector('.list');
let li = document.querySelectorAll('.list li');

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
    let task = document.createElement('li');
    let taskText = document.createTextNode(input.value);
    task.appendChild(taskText);
    ul.appendChild(task);

    input.value = '';
  }
  //Кнопка удалить
  let deleteTaskBtn = () => {
    let span = document.createElement('SPAN');
    let spanText = document.createTextNode('\u00D7');
    span.className = 'close';
    span.append(spanText);
    ul.appendChild(span);
    span.addEventListener('click', removeTask);
  };
  deleteTaskBtn();
  let checkedTask = () => {
    let checkbox = document.createElement('checkbox');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox-id';
    checkbox.className = 'checkbox-class';
    checkbox.checked = false;
    ul.appendChild(checkbox);
  };
  checkedTask();
};

let removeTask = (event) => {
  if (event.target.tagName === 'SPAN') {
    console.log('Кнопка закрыть');
    let close = event.target.parentNode;
    close.remove();
  }
};

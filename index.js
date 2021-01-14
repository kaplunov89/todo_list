const input = document.querySelector('#input-main');
const list = document.querySelector('.list');
const li = document.querySelector('.list');

input.addEventListener('keypress', function (event) {
  if (input.value === '') {
    document.querySelector('#input-main').placeholder = 'Введите задачу...';
  } else {
    if (event.key === 'Enter') {
      newTask();
      deleteTaskBtn();
      checkedTask();
    }
  }
});

newTask = () => {
  if (input.value !== '') {
    let task = document.createElement('li');
    let taskText = document.createTextNode(input.value);
    task.appendChild(taskText);
    list.appendChild(task);
  }
};

//Кнопка удалить
deleteTaskBtn = () => {
  let span = document.createElement('SPAN');
  let spanText = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(spanText);
  li.appendChild(span);
  span.addEventListener('click', removeTask);
  list.appendChild(li);
};
checkedTask = () => {
  let checkbox = document.createElement('checkbox');
  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox-id';
  checkbox.className = 'checkbox-class';

  li.appendChild(checkbox);
};
removeTask = (event) => {
  if (event.target.tagName === 'SPAN') {
    console.log('Кнопка закрыть');
    let close = event.target.parentNode;
    close.remove();
  }
};

let checkbox = document.querySelectorAll('input');
if (checkbox.checked) {
  li.style.textDecoration = 'line-through';
}

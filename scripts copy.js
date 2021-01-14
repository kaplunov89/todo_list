'use strict';

let list = document.getElementById('list-Id');
let input = document.getElementById('input-main');

let listTodo = document.querySelector('ul');

// function allChecked() {
//   let arrowBtn = document.getElementById('arrow-btn');
//   arrowBtn.addEventListener('click', allChecked);
//   let check = document.querySelectorAll('input[type="checkbox"]');
//
//   for (let i = 0; i < check.length; i++) {
//     if (arrowBtn) {
//       check[i].checked = true;
//     } else if (check[i].checked == true) {
//       check[i].checked = false;
//     }
//   }
//
//   console.log('allChecked сработала');
// }
allChecked();

listTodo.addEventListener(
    'click',
    function (event) {
        if (event.target.tagName === 'SPAN') {
            let close = event.target.parentNode;
            close.remove();
        }
    }

)


document.querySelector('#input-main')
    .addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            newElement();
        }
    });

//Добавление новой записи
function newElement() {
    let li = document.createElement('li');

    let inputText = input.value;
    let textCreate = document.createTextNode(inputText);
    li.appendChild(textCreate);

    //Редактирование елемента
    let editBtn = document.createElement('span');
    let editText = document.createTextNode('edit');
    editBtn.className = 'edit';
    editBtn.appendChild(editText);
    li.appendChild(editBtn);

    editBtn.addEventListener('click', function editElement() {
        let text = this.innerText;
        this.innerHTML = '';
        let edit = document.createElement('input');
        edit.className = 'renameInput';
        edit.value = text;
        this.appendChild(edit);
    });
    ///////////////
    if (input.value === '') {
        alert('Введите данные');
    } else {
        document.getElementById('list-id').appendChild(li);
    }
    document.getElementById('input-main').value = '';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox-id';
    checkbox.name = 'complated';
    checkbox.className = 'checkbox-class';
    li.appendChild(checkbox);
    checkbox.addEventListener('click', checked);

    function checked() {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';

            let count = document.querySelectorAll('input[type="checkbox"]').length;

            document.getElementById('complated').innerHTML = 'Завершенные : ' + count;
        } else {
            li.style.textDecoration = 'none';
        }
    }

    let span = document.createElement('SPAN');
    let spanText = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(spanText);
    li.appendChild(span);
    let count = document.getElementById('list-id').getElementsByTagName('LI')

    for (i = 0; 1 < count.length; i++) {

    }
    let countId = document.getElementById('count');
    countId.innerHTML = 'Всего записей: ' + count;
}


// var todo_items = 0;
// window.onload = function () {
//   var todo = document.getElementById('todo');
//   var todo_form = todo.querySelector('#todo-form');
//   todo_form.onsubmit = function (e) {
//     var todo_input = e.target.querySelector("input[name='todo']");
//     var todo_name;
//     if (todo_input.dataset.edit == 'true') {
//       var todo_item_id = todo_input.dataset.id;
//       todo_name = todo.querySelector(
//         '.tasks #item' + todo_item_id + ' .todo-name'
//       );
//       todo_name.textContent = todo_input.value;
//       todo_input.dataset.edit = false;
//       todo_input.dataset.id = '';
//     } else {
//       var todo_value = todo_input.value;
//
//       var item = document.createElement('tr');
//       item.id = 'item' + todo_items;
//
//       var todo_check = document.createElement('td');
//       todo_check.setAttribute('class', 'check fa fa-square');
//       todo_check.dataset.id = todo_items;
//       todo_check.dataset.checked = false;
//       todo_check.onclick = function (e) {
//         var todo_item_id = e.target.dataset.id;
//         var todo_name = todo.querySelector(
//           '.tasks #item' + todo_item_id + ' .todo-name'
//         );
//         if (e.target.dataset.checked == 'true') {
//           e.target.setAttribute('class', 'check fa fa-square');
//           todo_name.style.textDecoration = '';
//           e.target.dataset.checked = false;
//         } else {
//           e.target.setAttribute('class', 'check fa fa-check-square');
//           todo_name.style.textDecoration = 'line-through';
//           e.target.dataset.checked = true;
//         }
//       };
//       item.appendChild(todo_check);
//
//       todo_name = document.createElement('td');
//       todo_name.setAttribute('class', 'todo-name');
//       todo_name.textContent = todo_value;
//       item.appendChild(todo_name);
//
//       var edit_delete = document.createElement('td');
//
//       var edit_button = document.createElement('a');
//       edit_button.href = '#';
//       edit_button.textContent = 'Edit';
//       edit_button.dataset.id = todo_items;
//       edit_button.onclick = function (e) {
//         var todo_item_id = e.target.dataset.id;
//         var todo_name = todo.querySelector(
//           '.tasks #item' + todo_item_id + ' .todo-name'
//         );
//         var todo_input = todo.querySelector("#todo-form input[name='todo']");
//         todo_input.value = todo_name.textContent;
//         todo_input.dataset.edit = true;
//         todo_input.dataset.id = todo_item_id;
//
//         return false;
//       };
//       edit_delete.appendChild(edit_button);
//
//       edit_delete.appendChild(document.createTextNode(' | '));
//
//       var delete_button = document.createElement('a');
//       delete_button.href = '#';
//       delete_button.textContent = 'Delete';
//       delete_button.dataset.id = todo_items;
//       delete_button.onclick = function (e) {
//         var todo_item_id = e.target.dataset.id;
//         var todo_item = todo.querySelector('.tasks #item' + todo_item_id);
//         todo_item.parentNode.removeChild(todo_item);
//         return false;
//       };
//       edit_delete.appendChild(delete_button);
//
//       item.appendChild(edit_delete);
//
//       var tasks = todo.querySelector('.tasks');
//       tasks.appendChild(item);
//
//       todo_items++;
//     }
//     return false;
//   };
// };

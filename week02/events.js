let tasks = [];

function renderTasks(tasks) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear out any old tasks before re-rendering
  
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const taskText = document.createElement('p');
    taskText.textContent = task.detail;
    
    const completeBtn = document.createElement('span');
    completeBtn.innerHTML = '&#10003;';
    completeBtn.dataset.action = 'complete';
    
    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '&#10005;';
    deleteBtn.dataset.action = 'delete';

    if (task.completed) {
      li.classList.add('strike');
    }

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

function newTask() {
  const todoInput = document.getElementById('todo');
  const taskDetail = todoInput.value.trim();

  if (taskDetail) {
    tasks.push({ detail: taskDetail, completed: false });
    renderTasks(tasks);
    todoInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}

function removeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;
  tasks = tasks.filter(task => task.detail !== taskText);
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;
  const taskIndex = tasks.findIndex(task => task.detail === taskText);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle('strike');
}

function manageTasks(event) {
  const action = event.target.dataset.action;
  const taskElement = event.target.closest('li');
  
  if (action === 'delete') {
    removeTask(taskElement);
  } else if (action === 'complete') {
    completeTask(taskElement);
  }
}

document.getElementById('submitTask').addEventListener('click', newTask);
document.getElementById('todoList').addEventListener('click', manageTasks);

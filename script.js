document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    
    const listItem = document.createElement('li');

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '&#10003;'; // Checkmark symbol
    completeBtn.classList.add('completeBtn');
    completeBtn.onclick = () => {
      listItem.classList.toggle('completed');
      taskTextElement.classList.toggle('completed');
    };

    // Task text
    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '&#9998;'; // Pencil symbol
    editBtn.classList.add('editBtn');
    editBtn.onclick = () => editTask(taskTextElement);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#128465;'; // Trash can symbol
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onclick = () => {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(completeBtn);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
  }
}

function editTask(taskTextElement) {
  // Prompt user to edit the task text
  const newTaskText = prompt("Edit your task:", taskTextElement.textContent);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskTextElement.textContent = newTaskText.trim();
  }
}

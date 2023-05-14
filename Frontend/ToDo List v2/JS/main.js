// Selectors

// Selector for the input field for adding a new task
const toDoInput = document.querySelector('.todo-input');
// Selector for the button to add a new task
const toDoBtn = document.querySelector('.todo-btn');
// Selector for the list of tasks
const toDoList = document.querySelector('.todo-list');
// Selector for the standard theme button
const standardTheme = document.querySelector('.standard-theme');
// Selector for the light theme button
const lightTheme = document.querySelector('.light-theme');
// Selector for the darker theme button
const darkerTheme = document.querySelector('.darker-theme');


// Event Listeners

// Event listener for the button to add a new task
toDoBtn.addEventListener('click', addToDo);
// Event listener for the list of tasks
toDoList.addEventListener('click', deletecheck);
// Event listener to check if the page has loaded and get todos from local storage
document.addEventListener("DOMContentLoaded", getTodos);
// Event listener for the standard theme button
standardTheme.addEventListener('click', () => changeTheme('standard'));
// Event listener for the light theme button
lightTheme.addEventListener('click', () => changeTheme('light'));
// Event listener for the darker theme button
darkerTheme.addEventListener('click', () => changeTheme('darker'));

// Check if one theme has been set previously and apply it (or std theme if not found):
// Get the saved theme from local storage
let savedTheme = localStorage.getItem('savedTheme');
// Check if savedTheme is null, and if so, set the theme to 'standard'
savedTheme === null ?
    changeTheme('standard')
    : changeTheme(localStorage.getItem('savedTheme'));

// Functions;

// Function to add a new to-do item
function addToDo(event) {
    // Prevents form from submitting / Prevents form from relaoding;
    event.preventDefault();

    // Create a new div for the to-do item
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo', `${savedTheme}-todo`);

    // Create a new li element for the to-do item
    const newToDo = document.createElement('li');
    // Check if the input field is empty
    if (toDoInput.value === '') {
        alert("You must write something!");
    }
    else {
        // Set the text of the li element to the value of the input field
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        // Append the li element to the to-do div
        toDoDiv.appendChild(newToDo);

        // Adding to local storage;
        savelocal(toDoInput.value);

        // Create a button for checking the to-do item
        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add('check-btn', `${savedTheme}-button`);
        // Append the check button to the to-do div
        toDoDiv.appendChild(checked);
        // Create a button for deleting the to-do item
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn', `${savedTheme}-button`);
        // Append the delete button to the to-do div
        toDoDiv.appendChild(deleted);

        // Append the to-do div to the to-do list
        toDoList.appendChild(toDoDiv);

        // Clear the input field
        toDoInput.value = '';
    }
}

// Function to delete or check a to-do item
function deletecheck(event) {

    // console.log(event.target);
    const item = event.target;

    // Delete
    if (item.classList[0] === 'delete-btn') {
        // Add a fall animation to the to-do item
        item.parentElement.classList.add("fall");

        // Remove the to-do item from local storage
        removeLocalTodos(item.parentElement);

        // Remove the to-do item from the DOM after the animation is complete
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove();
        })
    }

    // Check
    if (item.classList[0] === 'check-btn') {
        // Toggle the completed class of the to-do item
        item.parentElement.classList.toggle("completed");
    }
}

// Function to save a new to-do item to local storage
function savelocal(todo) {
    //Check: if item/s are there;
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to get todos from local storage and add them to the DOM
function getTodos() {
    //Check: if item/s are there;
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function (todo) {
        // toDo DIV;
        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add("todo", `${savedTheme}-todo`);

        // Create LI
        const newToDo = document.createElement('li');

        newToDo.innerText = todo;
        newToDo.classList.add('todo-item');
        // Append the li element to the to-do div
        toDoDiv.appendChild(newToDo);

        // Create a button for checking the to-do item
        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add("check-btn", `${savedTheme}-button`);
        // Append the check button to the to-do div
        toDoDiv.appendChild(checked);
        // Create a button for deleting the to-do item
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add("delete-btn", `${savedTheme}-button`);
        // Append the delete button to the to-do div
        toDoDiv.appendChild(deleted);

        // Append the to-do div to the to-do list
        toDoList.appendChild(toDoDiv);
    });
}

// Function to remove a to-do item from local storage
function removeLocalTodos(todo) {
    //Check: if item/s are there;
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Find the index of the to-do item in the array
    const todoIndex = todos.indexOf(todo.children[0].innerText);
    // Remove the to-do item from the array
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to change the theme of the app
function changeTheme(color) {
    // Save the new theme to local storage
    localStorage.setItem('savedTheme', color);
    savedTheme = localStorage.getItem('savedTheme');

    // Change the background color of the body
    document.body.className = color;
    // Change the blinking cursor for the darker theme
    color === 'darker' ?
        document.getElementById('title').classList.add('darker-title')
        : document.getElementById('title').classList.remove('darker-title');

    // Change the input field color
    document.querySelector('input').className = `${color}-input`;

    // Change the to-do item color without changing their status (completed or not)
    document.querySelectorAll('.todo').forEach(todo => {
        Array.from(todo.classList).some(item => item === 'completed') ?
            todo.className = `todo ${color}-todo completed`
            : todo.className = `todo ${color}-todo`;
    });

    // Change the button color according to their type (to-do, check or delete)
    document.querySelectorAll('button').forEach(button => {
        Array.from(button.classList).some(item => {
            if (item === 'check-btn') {
                button.className = `check-btn ${color}-button`;
            } else if (item === 'delete-btn') {
                button.className = `delete-btn ${color}-button`;
            } else if (item === 'todo-btn') {
                button.className = `todo-btn ${color}-button`;
            }
        });
    });
}
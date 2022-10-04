// DOM SELECTION

let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
// let h1 = document.getElementsByTagName('.h1');

// h1[0].innerHTML=
// console.log(todoInput)

// EVENTLISTENERS

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)





//FUNCTIONS AND Creating HTML Elements in JS 

function addTodo(e){
    e.preventDefault(); //wont reload the page
    //html in js div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    //store in localstorage
    saveLocal(todoInput.value)
    //create a list
    const newTodo = document.createElement('li');
    newTodo.classList.add('newTodo');
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;
    todoInput.value='';

    // todoInput.value="Hello";

    // Create a check button 
    const checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    checkButton.innerHTML ='<i class="fa-solid fa-trash"></i>' 

    todoDiv.appendChild(checkButton);
    
    // Create a delete button 
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML ='<i class="fa-regular fa-square-check"></i>' 

    todoDiv.appendChild(deleteButton);

    console.log(todoDiv);

    //Call and Store it in a LocalStorage
    saveLocal(todoInput.value)
    todoInput.value='';

    todoList.appendChild(todoDiv);
}



// function deleteTodo(){
//     document.de
// }

function saveLocal(todo){
    // console.log(todo)
    // localStorage.setItem('')
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos= [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo);
    let convertIntoString = JSON.stringify(todos)
    localStorage.setItem('todos', convertIntoString)
}
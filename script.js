let Todos = JSON.parse(localStorage.getItem("Todos")) || []; 

document.addEventListener("DOMContentLoaded", showToDo);

function getToDo(event) {
    event.preventDefault();

    let todoInput = document.getElementById("ToDo");
    let todoText = todoInput.value.trim();

    if (todoText === '') return alert("Enter Your To-Do");

    Todos.push(todoText);
    localStorage.setItem("Todos", JSON.stringify(Todos)); 

    todoInput.value = ''; 
    todoInput.focus();

    showToDo();
}

function showToDo() {
    let container = document.getElementById("ToDo-Container");
    container.innerHTML = '';

    Todos.forEach((todo, index) => {
        let toDiv = document.createElement("div");
        toDiv.innerHTML = `<span>${todo}</span>`;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "❌";
        deleteButton.addEventListener("click", () => deleteToDo(index));

        toDiv.appendChild(deleteButton);
        container.appendChild(toDiv);
    });
}

function deleteToDo(index) {
    Todos.splice(index, 1);
    localStorage.setItem("Todos", JSON.stringify(Todos)); 
    showToDo();
}

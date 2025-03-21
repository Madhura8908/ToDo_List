let todo='';
let Todos=[];;
function getToDo(event){
    event.preventDefault();

    if(document.getElementById('ToDo').value==''){ return alert('Enter Your ToDos') }
    let todo= document.getElementById('ToDo').value;
    document.getElementById('ToDo').value='';
   
    Todos.push(todo);
    showToDo();

}
function showToDo(){
    document.getElementById('ToDo-Container').innerHTML='';
    Todos.map((todo,index)=>{
    let todiv = document.createElement('div');
    todiv.innerHTML=`<span>${todo}</span>`;
    let deleteButton =document.createElement('button');
    deleteButton.innerText='❌';
    deleteButton.addEventListener('click',()=>{
        deleteToDo(index);
    });
    todiv.appendChild(deleteButton)
    document.getElementById('ToDo-Container').appendChild(todiv);
})

}
function deleteToDo(index){
    Todos.splice(index,1);
    showToDo();
}






//  let Todos = JSON.parse(localStorage.getItem('todos')) || []; // Load stored todos

// // Function to add a new to-do
// function getTodo(event) {
//     event.preventDefault(); // Prevent form submission refresh

//     let todoInput = document.getElementById('ToDo').value;
//     if (todoInput === '') {
//         return alert("Enter a to-do");
//     }

//     Todos.push(todoInput);
//     localStorage.setItem('todos', JSON.stringify(Todos)); // Store in localStorage

//     document.getElementById('ToDo').value = ''; // Clear input field
//     showToDos();
// }
// function showToDos() {
//     let todoContainer = document.getElementById('ToDo-Container');
//     todoContainer.innerHTML = ''; // Clear the container
//     Todos = JSON.parse(localStorage.getItem('todos')) || []; // Refresh from storage

//     Todos.forEach((Todo, index) => {
//         let todoDiv = document.createElement('div');
//         todoDiv.innerHTML = `<span>${Todo}</span>`;
//         todoDiv.style.marginLeft = '2rem';

//         let deleteButton = document.createElement('button');
//         deleteButton.innerText = '❌';
//         deleteButton.addEventListener('click', () => {
//             deleteTodo(index);
//         });
//         todoDiv.appendChild(deleteButton);
//         todoContainer.appendChild(todoDiv);
//     });
// }

// // Function to delete a to-do
// function deleteTodo(index) {
//     Todos.splice(index, 1); // Remove from array
//     localStorage.setItem('todos', JSON.stringify(Todos)); // Update localStorage
//     showToDos(); // Refresh list
// }

// // Load stored to-dos when the page loads
// window.onload = function () {
//     showToDos();
// }; 
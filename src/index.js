


import "./styles.css";
import {Task, CreateTodo} from "./createToDos";
import {StartRendering, taskOpenListener,displayChosenGroup,projectCounter} from "./ToDoRender.js";

const createTodo = new CreateTodo();
const templateTodos = createTodo.getTasks();


//for adding tasks
const addFormBtn = document.getElementById("addDiv");
const closeFormBtn = document.getElementById("closeBtn");
const addForm = document.getElementById("addTaskDia");

addFormBtn.addEventListener("click", () => {
    addForm.show();
})
closeFormBtn.addEventListener("click", () => {
    addForm.close();
})






//for editing tasks
const editCloseFormBtn = document.getElementById("editCloseBtn");
const editForm = document.getElementById("editTaskDia");

editCloseFormBtn.addEventListener("click", () => {
    editForm.close(); 
});

export function editTaskListener() {
    const editFormBtns = document.querySelectorAll(".editIcon");

    editFormBtns.forEach((button) => {
        // Remove previous click listeners to avoid duplication
        button.removeEventListener("click", handleEdit); 
        button.addEventListener("click", handleEdit);
    });
}

// Handle the click event for editing tasks
function handleEdit(event) {
    const taskId = event.target.dataset.id; // Get task ID from the clicked button
    createTodo.editTask(taskId);

    // Open the edit form (assuming it's a dialog)
    editForm.showModal(); // Open the modal for editing
}









StartRendering(templateTodos);
taskOpenListener();
displayChosenGroup(createTodo);
projectCounter(createTodo);




export function clickDeleteListener() {
    const deleteButtons = document.querySelectorAll(".deleteIcon");
    
    deleteButtons.forEach((button) => {
        button.removeEventListener("click", handleDelete);
        button.addEventListener("click", handleDelete);
    });
}

function handleDelete(event) {
    const taskId = event.target.dataset.id; 
    createTodo.deleteTask(taskId);
}
clickDeleteListener();
editTaskListener();



import "./styles.css";
import {Task, CreateTodo} from "./createToDos";
import {StartRendering, taskOpenListener,displayChosenGroup,projectCounter} from "./ToDoRender.js";

const createTodo = new CreateTodo();
const templateTodos = createTodo.getTasks();



const addFormBtn = document.getElementById("addDiv");
const closeFormBtn = document.getElementById("closeBtn");
const addForm = document.getElementById("addTaskDia");

addFormBtn.addEventListener("click", () => {
    addForm.show();
})
closeFormBtn.addEventListener("click", () => {
    addForm.close();
})


StartRendering(templateTodos);
taskOpenListener();
displayChosenGroup(createTodo);
projectCounter(createTodo);
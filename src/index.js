


import "./styles.css";
import {Task, CreateTodo} from "./createToDos";
import {StartRendering} from "./ToDoRender.js";


const createTodo = new CreateTodo();
export const templateTodos = createTodo.getTasks();



const addFormBtn = document.getElementById("addDiv");
const closeFormBtn = document.getElementById("closeBtn");
const addForm = document.getElementById("addTaskDia");

addFormBtn.addEventListener("click", () => {
    addForm.show();
})
closeFormBtn.addEventListener("click", () => {
    addForm.close();
})


StartRendering();
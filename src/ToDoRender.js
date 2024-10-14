// Import the tasksArray from tasks.js
import {templateTodos} from "./index";
import dueDateIcon from './img/dueDate.png';

// Function to render tasks
function renderTasks() {
    const taskContainer = document.getElementById('TaskContainer');

    templateTodos.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        taskElement.innerHTML = `

            <div id="TaskRow" class="TaskRow">

            <div id="mainInfo" class="TaskDisplay">
                <input type="checkbox">
                <h4>${task.title}</h4>
            </div>

            <div id="addInfo" class="Taskinfo">
                <img src="${dueDateIcon}" alt="dueDate" class="menuIcon">
                <div class="date">${task.dueDate}</div>
                <div class="priority">${task.importance}</div>
                <div class="project">${task.project}</div>

                

            </div>
            <div id="description" class="Taskinfo">
                ${task.description}
            </div>
        </div>
        `;
        taskContainer.appendChild(taskElement);
    });
}

export function StartRendering(){
    document.addEventListener('DOMContentLoaded', renderTasks);
}








console.log("rendering...");

// Import the tasksArray from tasks.js
import {templateTodos} from "./index";

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

            <div id="addInfo" class="TaskDisplay">

            </div>
            
        </div>


            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.description}</div>
            <div class="task-date">Due: ${task.dueDate}</div>
            <div class="task-importance">Priority: ${task.importance}</div>
            <div class="task-project">Project: ${task.project}</div>
            <div class="task-status">${task.isDone ? 'Completed' : 'Pending'}</div>
        `;
        taskContainer.appendChild(taskElement);
    });
}

export function StartRendering(){
    document.addEventListener('DOMContentLoaded', renderTasks);
}








console.log("rendering...");

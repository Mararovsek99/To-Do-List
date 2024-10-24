
import deleteIcon from './img/delete-icon.png';
import dueDateIcon from './img/dueDate.png';
import editIcon from './img/edit-icon.png';
import {CreateTodo} from "./createToDos";
import {clickDeleteListener,editTaskListener} from "./index.js";


function renderTasks(array) {
    const taskContainer = document.getElementById('TaskContainer');
    let counter = 0;
    const titleNum = document.getElementById("titleNum");

    array.forEach(task => {
        counter += 1;

        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        taskElement.innerHTML = `

            <div id="TaskRow" class="TaskRow">

        <div id="mainInfo" class="TaskDisplay">
            <input type="checkbox" ${task.isDone ? `checked` : ``}>
            <h4>${task.title}</h4>

        </div>

        <div id="addInfo" class="Taskinfo">
            <img src="${dueDateIcon}" alt="dueDate" class="menuIcon">
            <div class="date">${task.dueDate}</div>
            <div class="project">${task.project}</div>
            <img src="${editIcon}" alt="Edit Task icon" class="menuIcon editIcon" id="editIcon" data-id="${task.id}">
            <img src="${deleteIcon}" alt="Delete Task icon" class="menuIcon deleteIcon" id="deleteIcon" data-id="${task.id}">

        </div>
        <div id="description" class="Taskinfo">
            ${task.description}
        </div>
    </div>
        `;
        taskContainer.appendChild(taskElement);
    });
    titleNum.textContent = counter.toString();

}

export function StartRendering(array){
    document.addEventListener('DOMContentLoaded', renderTasks(array));
}



export function taskOpenListener(){
    const taskscontainer = document.getElementById("TaskContainer");

    taskscontainer.addEventListener("click", function(event){
        const taskItem = event.target.closest('.task-item');
        if (taskItem) {
            taskItem.classList.toggle("task-item-open");
        }
       
    });
}
  
export function displayChosenGroup(createTodo){
    const menu = document.getElementById("menu");
    const mainTitle = document.getElementById("mainTitle");
    let title = mainTitle.textContent;

    menu.addEventListener("click", function(event) {

        const classFinder = event.target.closest(".group");
        const classFinderDate = event.target.closest(".groupDate");

        if (classFinder){
            title = classFinder.querySelector("h4").textContent;
        }
        else if(classFinderDate){
            title = classFinderDate.querySelector("h4").textContent;
        }
        GroupRender(event);
    });
    
        function GroupRender(event){
        const classFinder = event.target.closest(".group");
        const classFinderDate = event.target.closest(".groupDate");
            if (classFinder) {

                const openTasks = document.querySelectorAll(".task-item");
            openTasks.forEach(taskItem => {
                taskItem.remove();
            });

            mainTitle.textContent = title;

            const ToDo = createTodo.getTasks();
            const ToDoGroup = ToDo.filter(todo => todo.project.replace(/^["']|["']$/g, "") === title);

            renderTasks(ToDoGroup);

            }
            else if(classFinderDate){

                    const openTasks = document.querySelectorAll(".task-item");
                    openTasks.forEach(taskItem => {
                    taskItem.remove();
                    });

                const title = classFinderDate.querySelector("h4").textContent;
                mainTitle.textContent = title;

                const ToDo = createTodo.getTasks();
                
                const ToDoGroup = ToDo.filter(todo => {
                    const dueDate = new Date(todo.dueDate);
                    dueDate.setHours(0, 0, 0, 0);

                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const oneWeek = new Date();
                    oneWeek.setDate(today.getDate() + 7);
                    oneWeek.setHours(0, 0, 0, 0);


                    if(title === "Upcoming"){
                        return dueDate >= today;
                    }
                    else if(title === "Today"){
                        return dueDate.toDateString() === today.toDateString();
                    }
                    else if(title === "Week"){
                        return dueDate >= today && dueDate <= oneWeek;
                    }
                    return false;
                })
                renderTasks(ToDoGroup);
            }
            clickDeleteListener();
            editTaskListener();
    }
}
export function addTaskInGroup(createTodo) {
    const mainTitle = document.getElementById("mainTitle");
    const title = mainTitle.textContent;

    const ToDo = createTodo.getTasks();
    let ToDoGroup;

    if (title === "Upcoming" || title === "Today" || title === "Week") {
        ToDoGroup = ToDo.filter(todo => {
            const dueDate = new Date(todo.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const oneWeek = new Date();
            oneWeek.setDate(today.getDate() + 7);
            oneWeek.setHours(0, 0, 0, 0);

            if (title === "Upcoming") {
                return dueDate >= today;
            } else if (title === "Today") {
                return dueDate.toDateString() === today.toDateString();
            } else if (title === "Week") {
                return dueDate >= today && dueDate <= oneWeek;
            }
            return false;
        });
    } else {
        ToDoGroup = ToDo.filter(todo => todo.project.replace(/^["']|["']$/g, "") === title);
    }

    const openTasks = document.querySelectorAll(".task-item");
    openTasks.forEach(taskItem => {
        taskItem.remove();
    });

    renderTasks(ToDoGroup);
}


export function projectCounter(Todos){

    const array = Todos.getTasks();
 
    const projects = document.querySelectorAll(".menuRow");
    projects.forEach(project => {

        if (project.classList.contains("group")) {
            const title = project.querySelector("h4").textContent;
            const projectNum = project.querySelector(".projectNum");
            let counter = 0;

            array.forEach(todo => {
                const todoProject = todo.project;
                
                if (todoProject === title) {
                    counter += 1;
                }
            });
            projectNum.textContent = counter.toString();
        }

        if (project.classList.contains("groupDate")) {
            const title = project.querySelector("h4").textContent; //Upcoming
            const projectNum = project.querySelector(".projectNum"); //0
            let counter = 0;                                           //0

                const ToDoGroup = array.filter(todo => {       //across all todos
                const dueDate = new Date(todo.dueDate);
                dueDate.setHours(0, 0, 0, 0);

                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const oneWeek = new Date();
                oneWeek.setDate(today.getDate() + 7);
                oneWeek.setHours(0, 0, 0, 0);


                if(title === "Upcoming"){
                    return dueDate >= today;
                }
                else if(title === "Today"){
                    return dueDate.toDateString() === today.toDateString();
                }
                else if(title === "Week"){
                    return dueDate >= today && dueDate <= oneWeek;
                }
                });
                counter = ToDoGroup.length;
                projectNum.textContent = counter.toString();
        }
    })
}
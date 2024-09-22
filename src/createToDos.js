export class Task{
    constructor(title, description = "", dueDate, importance = 1 , isDone = false, project = "Default"){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.importance = importance;
        this.isDone = isDone;
        this.project = project;
    }
}

export class CreateTodo{
    constructor(){
        this.tasks = [];
        this.taskForminfo = document.getElementById("toDoForm");
        this.TaskContainer = document.getElementById("TaskContainer");
        this.addnewTaskBtn = document.getElementById("newTaskBtn");

        this.addnewTaskBtn.addEventListener("click", (event) => this.addTask(event));
    }

    addTask(event){
        event.preventDefault();
        const taskTitle = this.taskForminfo.elements["title"].value;
        const taskDate = this.taskForminfo.elements["dueDate"].value;
        const taskImportance = this.taskForminfo.elements["importance"].value;
        const taskDesc = this.taskForminfo.elements["description"].value;

        if (!taskTitle && !taskDate) {
            document.getElementById("inputError").textContent = "Title and due date are required.";
            return;
        }
        else if(!taskTitle){
            document.getElementById("inputError").textContent = "Title is required.";
            return;
        }
        else if(!taskDate){
            document.getElementById("inputError").textContent = "Due date is required.";
            return;
        }
        else{
            document.getElementById("inputError").textContent = "";

        }

        const newTask = new Task(taskTitle, taskDesc, taskDate, taskImportance )


        this.tasks.push(newTask);
        console.log(this.tasks);

        this.taskForminfo.reset();
    }
}
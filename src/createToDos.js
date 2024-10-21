import {projectCounter, addTaskInGroup} from "./ToDoRender.js";
import {clickDeleteListener,editTaskListener} from "./index.js";
let taskIdCounter = 0;

export class Task{
    constructor(title, description = "", dueDate, importance = 1 , isDone = false, project = "Default"){
        this.id = taskIdCounter++;
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

        this.addTemplateTasks();
    }

    addTask(event){
        event.preventDefault();
        const taskTitle = this.taskForminfo.elements["title"].value;
        const taskDate = this.taskForminfo.elements["dueDate"].value;
        const taskImportance = this.taskForminfo.elements["importance"].value;
        const taskDesc = this.taskForminfo.elements["description"].value;  
        const taskProject = document.getElementById("mainTitle").textContent;

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

        const newTask = new Task(taskTitle, taskDesc, taskDate, taskImportance,false, taskProject)


        this.tasks.push(newTask);

        this.taskForminfo.reset();

        const form = document.getElementById("addTaskDia");
        form.close();
        projectCounter(this);
        addTaskInGroup(this);
        clickDeleteListener();
        }
    addTemplateTasks(){
        /*CREATE SOME TODOS with chatGPT*/
        const newTask1 = new Task("Grocery shopping", "Buy milk, eggs, and bread", "2024-10-15", 2, false, "Shopping");
        const newTask2 = new Task("Team meeting", "Prepare for Monday project update", "2024-10-14", 3, false, "Work");
        const newTask3 = new Task("Workout", "Do a 30-minute cardio session", "2024-10-25", 1, false, "Personal"); // Future
        const newTask4 = new Task("Finish report", "Complete the Q3 financial report", "2024-10-26", 3, true, "Work"); // Future
        const newTask5 = new Task("Call plumber", "Fix the leaky kitchen sink", "2024-10-16", 2, false, "Personal");
        const newTask6 = new Task("Buy new shoes", "Look for running shoes at the mall", "2024-10-17", 1, false, "Shopping");
        const newTask7 = new Task("Birthday gift", "Order a present for Sarah's birthday", "2024-10-18", 2, false, "Personal");
        const newTask8 = new Task("Submit code review", "Review John's pull request on GitHub", "2024-10-27", 3, true, "Work"); // Future
        const newTask9 = new Task("Read a book", "Read 20 pages of the new sci-fi novel", "2024-10-28", 1, false, "Urgent"); // Future
        const newTask10 = new Task("Plan weekend trip", "Research hiking spots nearby", "2024-10-20", 2, false, "Personal");
        const newTask11 = new Task("Laundry", "Wash and fold clothes", "2024-10-21", 1, true, "Default"); // Future
        const newTask12 = new Task("Email client", "Send project proposal to client", "2024-10-14", 3, false, "Work");
        const newTask13 = new Task("Buy groceries", "Get ingredients for dinner", "2024-10-22", 2, true, "Shopping"); // Future
        const newTask14 = new Task("Organize desk", "Clean and organize the home office", "2024-10-21", 1, false, "Personal");
        const newTask15 = new Task("Submit expense report", "Complete and submit expense report for September", "2024-10-29", 3, true, "Work"); // Future
        const newTask16 = new Task("Fix bug in app", "Investigate and fix login issue in mobile app", "2024-10-19", 3, false, "Work");
        const newTask17 = new Task("Doctor appointment", "Routine checkup at the clinic", "2024-10-25", 2, false, "Personal");
        const newTask18 = new Task("Order supplies", "Restock office supplies (paper, pens)", "2024-10-23", 2, false, "Work");
        const newTask19 = new Task("Clean garage", "Organize tools and clean up space", "2024-10-22", 1, false, "Default");
        const newTask20 = new Task("Pay utility bills", "Pay the water and electricity bills", "2024-10-13", 2, false, "Default"); // Past
        const newTask21 = new Task("Online course", "Finish lesson on JavaScript classes", "2024-10-30", 2, false, "Personal"); // Future
        const newTask22 = new Task("Grocery shopping", "Buy vegetables and fruits", "2024-10-08", 2, true, "Shopping"); // Past
        const newTask23 = new Task("Workout", "Do a 45-minute strength training", "2024-10-31", 1, false, "Personal"); // Future
        const newTask24 = new Task("Team meeting", "Discuss Q4 goals", "2024-11-01", 3, true, "Work"); // Future
        const newTask25 = new Task("Pick up dry cleaning", "Collect suits from dry cleaner", "2024-11-02", 1, false, "Personal"); // Future
        const newTask26 = new Task("Call bank", "Inquire about loan options", "2024-11-03", 2, false, "Urgent"); // Future
        const newTask27 = new Task("Prepare presentation", "Create slides for next week's meeting", "2024-11-04", 3, false, "Work"); // Future
        const newTask28 = new Task("Buy new laptop", "Research laptops for work", "2024-11-05", 2, false, "Shopping"); // Future
        const newTask29 = new Task("Dentist appointment", "Annual dental checkup", "2024-11-06", 2, false, "Personal"); // Future
        const newTask30 = new Task("Send invitations", "Email invites for Sarah's birthday party", "2024-11-07", 2, true, "Personal"); // Future
        const newTask31 = new Task("Walk the dog", "Take the dog for a 30-minute walk", "2024-11-08", 1, false, "Personal"); // Future
        const newTask32 = new Task("Finish report", "Write and submit the Q3 sales report", "2024-11-09", 3, true, "Work"); // Future
        const newTask33 = new Task("Mow the lawn", "Cut the grass in the backyard", "2024-11-10", 1, false, "Default"); // Future
        const newTask34 = new Task("Submit tax documents", "Submit the tax return forms", "2024-11-11", 3, true, "Work"); // Future
        const newTask35 = new Task("Prepare dinner", "Cook a healthy meal for the family", "2024-11-12", 2, false, "Personal"); // Future
        const newTask36 = new Task("Pick up kids", "Drive kids home from school", "2024-11-13", 1, false, "Personal"); // Future
        const newTask37 = new Task("Create marketing plan", "Draft a new marketing strategy for Q4", "2024-11-14", 3, true, "Work"); // Future
        const newTask38 = new Task("Fix kitchen light", "Replace the bulb in the kitchen", "2024-11-15", 1, false, "Default"); // Future
        const newTask39 = new Task("Weekly grocery shopping", "Buy food for the week", "2024-11-16", 2, true, "Shopping"); // Future
        const newTask40 = new Task("Organize files", "Sort and categorize digital files", "2024-11-17", 1, false, "Work"); // Future
        


        this.tasks.push(
            newTask1, newTask2, newTask3, newTask4, newTask5, newTask6, newTask7, newTask8, newTask9, newTask10,
            newTask11, newTask12, newTask13, newTask14, newTask15, newTask16, newTask17, newTask18, newTask19, newTask20,
            newTask21, newTask22, newTask23, newTask24, newTask25, newTask26, newTask27, newTask28, newTask29, newTask30,
            newTask31, newTask32, newTask33, newTask34, newTask35, newTask36, newTask37, newTask38, newTask39, newTask40
        );
    }
    getTasks(){
        return this.tasks;
    }
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== parseInt(taskId, 10)); // Filter out the task by ID
        addTaskInGroup(this);
        projectCounter(this);
        clickDeleteListener();
    }
    editTask(taskId) {
        console.log(taskId);

        const editTask = this.tasks.find(task => task.id === parseInt(taskId, 10));
        
        //populate form
        const title = document.getElementById("editTitle");
        const dueDate = document.getElementById("editDueDate");
        const importance = document.getElementById("editImportance");
        const description = document.getElementById("editDescription");

        title.value = editTask.title;
        dueDate.value = editTask.dueDate;
        importance.value = editTask.importance;
        description.value = editTask.description;

        //listener for saving
        const saveBtn = document.getElementById("editNewTaskBtn");
        const editForm = document.getElementById("editTaskDia");

        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.replaceWith(newSaveBtn);

        const that = this;

        function updateTask(event){
            event.preventDefault();
    
           editTask.title = title.value ;
           editTask.dueDate = dueDate.value ;
           editTask.importance = importance.value ;
           editTask.description = description.value ;

           addTaskInGroup(that);
           editForm.close();
           editTaskListener();
        }

        newSaveBtn.addEventListener("click", updateTask);
    }
    
    
}
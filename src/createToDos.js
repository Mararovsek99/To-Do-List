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

        this.addTemplateTasks();
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

        const form = document.getElementById("addTaskDia");
        form.close();
    }
    addTemplateTasks(){
        /*CREATE SOME TODOS with chatGPT*/
        const newTask1 = new Task('Grocery shopping', 'Buy milk, eggs, and bread', '2024-10-15', 2, false, 'shopping');
        const newTask2 = new Task('Team meeting', 'Prepare for Monday project update', '2024-10-14', 3, false, 'work');
        const newTask3 = new Task('Workout', 'Do a 30-minute cardio session', '2024-10-13', 1, false, 'personal');
        const newTask4 = new Task('Finish report', 'Complete the Q3 financial report', '2024-10-12', 3, true, 'work');
        const newTask5 = new Task('Call plumber', 'Fix the leaky kitchen sink', '2024-10-16', 2, false, 'personal');
        const newTask6 = new Task('Buy new shoes', 'Look for running shoes at the mall', '2024-10-17', 1, false, 'shopping');
        const newTask7 = new Task('Birthday gift', 'Order a present for Sarah\'s birthday', '2024-10-18', 2, false, 'personal');
        const newTask8 = new Task('Submit code review', 'Review John\'s pull request on GitHub', '2024-10-11', 3, true, 'work');
        const newTask9 = new Task('Read a book', 'Read 20 pages of the new sci-fi novel', '2024-10-12', 1, false, 'personal');
        const newTask10 = new Task('Plan weekend trip', 'Research hiking spots nearby', '2024-10-20', 2, false, 'personal');
        const newTask11 = new Task('Laundry', 'Wash and fold clothes', '2024-10-10', 1, true, 'Default');
        const newTask12 = new Task('Email client', 'Send project proposal to client', '2024-10-14', 3, false, 'work');
        const newTask13 = new Task('Buy groceries', 'Get ingredients for dinner', '2024-10-11', 2, true, 'shopping');
        const newTask14 = new Task('Organize desk', 'Clean and organize the home office', '2024-10-21', 1, false, 'personal');
        const newTask15 = new Task('Submit expense report', 'Complete and submit expense report for September', '2024-10-11', 3, true, 'work');
        const newTask16 = new Task('Fix bug in app', 'Investigate and fix login issue in mobile app', '2024-10-19', 3, false, 'work');
        const newTask17 = new Task('Doctor appointment', 'Routine checkup at the clinic', '2024-10-25', 2, false, 'personal');
        const newTask18 = new Task('Order supplies', 'Restock office supplies (paper, pens)', '2024-10-23', 2, false, 'work');
        const newTask19 = new Task('Clean garage', 'Organize tools and clean up space', '2024-10-22', 1, false, 'Default');
        const newTask20 = new Task('Pay utility bills', 'Pay the water and electricity bills', '2024-10-13', 2, false, 'Default');

        this.tasks.push(newTask1, newTask2, newTask3, newTask4, newTask5, newTask6, newTask7, newTask8, newTask9, newTask10,
                        newTask11, newTask12, newTask13, newTask14, newTask15, newTask16, newTask17, newTask18, newTask19, newTask20);
        console.log(this.tasks);
    }
    getTasks(){
        return this.tasks;
    }
}
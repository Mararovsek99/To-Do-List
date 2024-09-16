export default class Task{
    constructor(title, description = "", dueDate, importance = 1 , isDone = false, project = "Default"){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.importance = importance;
        this.isDone = isDone;
        this.project = project;
    }
}
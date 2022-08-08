import { Project } from "./project";

export class Task {
    constructor(title, dueDate, projectTitle, priority, isComplete) {
        this.title = title;
        this.dueDate = dueDate;
        this.projectTitle = projectTitle;
        this.priority = priority;
        this.isComplete = isComplete;
    }
}

let taskList = [];
let currentProject = [];

function filterByProject() {
    let filterProject = taskList.filter(val => val.projectTitle.includes(currentProject));
    return filterProject;
}

export { currentProject, filterByProject, taskList }
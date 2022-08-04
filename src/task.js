import { Project } from "./project";

export class Task {
    constructor(title, dueDate, projectTitle, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.projectTitle = projectTitle;
        this.priority = priority;
    }
}

const taskList = [];
let currentProject = 'New Project';

function filterByProject() {
    let filterProject = taskList.filter(val => val.projectTitle.includes(currentProject));
    console.log(filterProject);
    return filterProject;
}

export { currentProject, filterByProject, taskList }
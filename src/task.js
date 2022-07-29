import { Project } from "./project";

export class Task {
    constructor(title, description, dueDate, projectTitle, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.projectTitle = projectTitle;
        this.priority = priority;
    }
}

const taskList = [];
let currentProject = '';

function newTask(title, description, dueDate, projectTitle, priority) {
    let addTask = new Task(title, description, dueDate, projectTitle, priority);
    taskList.push(addTask)
}

function filterByProject(taskList = taskList, projectName) {
    currentProject = projectName;
    const filterProject = taskList.filter(val => val.projectTitle.includes(currentProject));
    console.log(filterProject)
    return filterProject
}

newTask('Winner', 'Score a TD', 'Today', 'Sports', 'High');
newTask('Loser', 'Get Scored On', 'Tomorrow', 'Sports', 'High');
newTask('Food', 'Eat a Burger', 'Tonight', 'Food', 'Low');

export { taskList, currentProject, filterByProject }
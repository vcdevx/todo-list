import { currentProject, taskList } from "./task";
import { projectList } from "./project";

// Tasks local storage


const saveTaskToLocalStorage = (task) => {
    localStorage.setItem('taskList', JSON.stringify(task))
}

const getTasks = () => {
    if(localStorage.getItem('taskList') === null) {
        taskList = [];
    } else {
        taskList = JSON.parse(localStorage.getItem('taskList'));
    }
}

const clearLocalStorage = (task) => {
    if(localStorage.getItem(task) === null) {
        taskList = [];
    } else {  
        taskList = JSON.parse(localStorage.getItem('taskList'))
    }
    localStorage.setItem('taskList', JSON.stringify(taskList))
}

//Project local stoarge

const saveProjectToLocalStorage = (project) => {
    localStorage.setItem('projectList', JSON.stringify(project))
}

const getProjects = () => {
    if(localStorage.getItem('projectList') === null) {
        projectList = [];
    } else {
        projectList = JSON.parse(localStorage.getItem('projectList'));
    }
}

const saveCurrentProject = (projectName) => {
    localStorage.setItem('currentProject', JSON.stringify(projectName))
}

const getCurrentProject = () => {
    if(localStorage.getItem('currentProject') === null) {
        currentProject = '';
    } else {
        currentProject = JSON.parse(localStorage.getItem('currentProject'));
    }
}

export { saveTaskToLocalStorage, getTasks, clearLocalStorage, saveProjectToLocalStorage, getProjects, saveCurrentProject, getCurrentProject }
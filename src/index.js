import { Task } from './task'
import { displayTasks, displayProjects, generateProject, generateTask } from './DOM'
import { projectList, defaultProject } from './project';
import { getProjects, getTasks } from './storage';


console.log(projectList);

getProjects();
getTasks();
displayTasks();
displayProjects();
generateTask();
generateProject();
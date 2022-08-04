import { Task } from './task'
import { displayTasks, displayProjects, generateProject, generateTask } from './DOM'
import { projectList, defaultProject } from './project';

projectList.push(defaultProject);
console.log(projectList);
displayTasks();
displayProjects();
generateTask();
generateProject();
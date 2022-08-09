import { Task } from './task'
import { displayTasks, displayProjects, generateProject, generateTask } from './DOM'
import { projectList, defaultProject } from './project';
import { getCurrentProject, getProjects, getTasks } from './storage';

getProjects();
getTasks();
getCurrentProject();
displayTasks();
displayProjects();
generateTask();
generateProject();
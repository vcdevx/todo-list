import { taskList, filterByProject } from './task'
import { displayTasks } from './DOM'

console.log(taskList)
filterByProject(taskList, 'Sports');
displayTasks(filterByProject);
import { taskList, currentTask, filterByProject, Task, filterProject } from "./task";


const generateTask = () => {

    let newTaskBtn = document.querySelector('.newTaskBtn');
    
    const createTask = () => {

        let newTaskContainer = document.querySelector('.newTaskContainer');
        
        newTaskContainer.style.display = 'flex';
        newTaskBtn.style.display = 'none';

        let taskName = document.querySelector('#taskName');
    }

    newTaskBtn.addEventListener('click', createTask);
    
    
}


/*function displayTasks(listOfTasks) {
    filterProject.forEach(element => {

        let task = document.createElement('div');
        task.classList.add('task');
        taskListContainer.append(task);

        let taskCheck = document.createElement('span');
        taskCheck.classList.add('material-symbols-outlined');
        taskCheck.textContent = 'radio_button_unchecked';
        task.append(taskCheck)

        let taskTitle = document.createElement('p');
        task.classList.add('taskTitle');
        taskTitle.textContent = element.title;
        taskListContainer.append(task);
        console.log('hi');
    });
}*/


export { generateTask }
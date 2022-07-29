import { taskList, currentTask, filterByProject, Task, filterProject } from "./task";

const createTask = () => {
    let taskFormFadeToBlack = document.createElement('div');
    taskFormFadeToBlack.classList.add('taskFormFadeToBlack');
    document.body.append(taskFormFadeToBlack);

    let taskFormContainer = document.createElement('div');
    taskFormContainer.classList.add('taskFormContainer');
    taskFormContainer.append('taskFormFadeToBlack')
}

let taskListContainer = document.querySelector('.taskList')

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


export {  }
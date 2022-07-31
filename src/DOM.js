import { Project, projectList } from "./project";
import { taskList, currentTask, filterByProject, filterProject, Task, currentProject, newTask } from "./task";


const generateTask = () => {

    let newTaskBtn = document.querySelector('.newTaskBtn');
    let newTaskContainer = document.querySelector('.newTaskContainer');


    newTaskBtn.addEventListener('click', function() {
        newTaskContainer.style.display = 'flex';
        newTaskBtn.style.display = 'none';
    });
    

    let confirmTaskBtn =  document.querySelector('.confirmTaskBtn');
    let cancelTaskBtn = document.querySelector('.cancelTaskBtn');

    confirmTaskBtn.addEventListener('click', function() {
        let title = document.querySelector('#taskName').value;
        let dueDate = document.querySelector('#taskDate').value;
        let priority = document.querySelector('#prioritySelector').value;
        let projectTitle = currentProject;    

        let addTasks = new Task(title, dueDate, projectTitle, priority);
        console.log(taskList);
        taskList.push(addTasks);
        resetTaskList();
        displayTasks(taskList);
        
        const inputs = document.querySelectorAll('#taskName, #taskDate, #prioritySelector');
        inputs.forEach(input => {
            input.value = ''
        })
  
        newTaskContainer.style.display = 'none'; 
        newTaskBtn.style.display = 'inline';
    });

    cancelTaskBtn.addEventListener('click', function() {
        newTaskContainer.style.display = 'none';
        newTaskBtn.style.display = 'inline';
    });
    

}

const displayTasks = () => {
    let taskListContainer = document.querySelector('.taskList');

    filterByProject().forEach(element => {

        let task = document.createElement('div');
        task.dataset.index = i;
        task.classList.add('task');
        taskListContainer.append(task);

        let taskCheck = document.createElement('span');
        taskCheck.classList.add('material-symbols-outlined');
        taskCheck.textContent = 'radio_button_unchecked';

        let taskTitle = document.createElement('p');
        taskTitle.classList.add('taskTitle');
        taskTitle.textContent = element.title;

        let taskDate = document.createElement('p');
        taskDate.classList.add('taskDate');
        taskDate.textContent = element.dueDate;

        let taskDelete = document.createElement('span');
        taskDelete.classList.add('material-symbols-outlined');
        taskDelete.textContent = 'delete';

        let taskArrow = document.createElement('span');
        taskArrow.classList.add('material-symbols-outlined');
        taskArrow.textContent = 'keyboard_double_arrow_down';

        task.append(taskCheck, taskTitle, taskDate, taskDelete, taskArrow);
    });
}

const resetTaskList = () => {

    let taskListContainer = document.querySelector('.taskList');
    taskListContainer.innerHTML = '';
}

const generateProject = () => {

    let newProjectBtn = document.querySelector('.newProjectBtn');
    let newProjectContainer = document.querySelector('.newProjectContainer');
    
    newProjectBtn.addEventListener('click', function() {
        newProjectContainer.style.display = 'flex';
        newProjectBtn.style.display = 'none';
    });

    let confirmProjectBtn =  document.querySelector('.confirmProjectBtn');
    let cancelProjectBtn = document.querySelector('.cancelProjectBtn');

    confirmProjectBtn.addEventListener('click', function() {
        let title = document.querySelector('#projectName').value;

        let addProjects = new Project(title);
        projectList.push(addProjects);
        
        const inputs = document.querySelectorAll('#projectName');
        inputs.forEach(input => {
            input.value = '';
        })
  
        newProjectContainer.style.display = 'none'; 
        newProjectBtn.style.display = 'inline';
    });

    cancelProjectBtn.addEventListener('click', function() {
        newProjectContainer.style.display = 'none';
        newProjectBtn.style.display = 'inline';
    });
}


export { generateTask, generateProject }
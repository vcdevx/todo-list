import { Project, projectList } from "./project";
import { taskList, filterByProject, Task, currentProject } from "./task";
import { saveTaskToLocalStorage, getTask, clearLocalStorage, saveProjectToLocalStorage } from "./storage";


const generateTask = () => {

    let newTaskBtn = document.querySelector('.newTaskBtn');
    let newTaskContainer = document.querySelector('.newTaskContainer');


    newTaskBtn.addEventListener('click', function() {

        if (projectList.length === 0) {
            alert('Please create a project first!')
        } else {
            newTaskContainer.style.display = 'flex';
            newTaskBtn.style.display = 'none';
        }
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
        saveTaskToLocalStorage(taskList);
        console.log(localStorage);
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
    let i = 0;

    filterByProject().forEach(element => {
        let task = document.createElement('div');
        task.dataset.index = i;
        console.log(i);
        i++
        task.classList.add('task');
        taskListContainer.append(task);

        let taskTitleContainer = document.createElement('div');
        taskTitleContainer.classList.add('taskTitleContainer');

        let taskCheck = document.createElement('span');
        taskCheck.classList.add('material-symbols-outlined', 'taskCheck');
        taskCheck.textContent = 'radio_button_unchecked';

        let taskTitle = document.createElement('p');
        taskTitle.classList.add('taskTitle');
        taskTitle.textContent = element.title;

        taskTitleContainer.append(taskCheck, taskTitle)

        let taskDate = document.createElement('p');
        taskDate.classList.add('taskDate');
        taskDate.textContent = element.dueDate;

        let taskDelete = document.createElement('span');
        taskDelete.classList.add('material-symbols-outlined', 'deleteTaskBtn');
        taskDelete.textContent = 'delete';

        let taskEdit = document.createElement('span');
        taskEdit.classList.add('material-symbols-outlined', 'taskEdit');
        taskEdit.textContent = 'edit_square';

        if(element.priority == 'high') {
            task.classList.add('highPriority');
        }

        task.append(taskTitleContainer, taskDate, taskDelete);
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
        currentProject = title;

        saveProjectToLocalStorage(projectList);

        resetProjectList();
        displayProjects();
        
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

const displayProjects = () => {
    let projectListContainer = document.querySelector('.projectList');
    let i = 0;

    projectList.forEach(element => {

        let project = document.createElement('div');
        project.classList.add('project');
        projectListContainer.append(project);
        project.dataset.index = i;
        console.log(i);
        i++

        let projectTitle = document.createElement('p');
        projectTitle.classList.add('taskTitle');
        projectTitle.textContent = element.title;

        let projectDelete = document.createElement('span');
        projectDelete.classList.add('material-symbols-outlined', 'deleteProjectBtn');
        projectDelete.textContent = 'delete';

        project.append(projectTitle, projectDelete);  
    });
}

const resetProjectList = () => {

    let projectListContainer = document.querySelector('.projectList');
    projectListContainer.innerHTML = '';
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('project')) {

        let projectName = event.target.querySelector('.taskTitle').textContent;

        currentProject = projectName;
        resetTaskList();
        displayTasks(taskList);
    }
})

//Delete buttons for task and project

document.addEventListener('click', function (event) {

    let task = document.querySelector('.task');

    if (event.target.classList.contains('deleteTaskBtn')) {
        event.stopPropagation();
        taskList.splice(task.dataset.index, 1);
        saveTaskToLocalStorage(taskList);
        event.target.closest('.task').remove();
        resetTaskList();
    }
})

document.addEventListener('click', function (event) {

    let project = document.querySelector('.project');

    if (event.target.classList.contains('deleteProjectBtn')) {
        event.stopPropagation();
        projectList.splice(project.dataset.index, 1);
        saveProjectToLocalStorage(projectList);
        event.target.closest('.project').remove();
        resetTaskList();
    }
})

// Event listener for checking off tasks

document.addEventListener('click', function (event) {

    let taskCheck = document.querySelector('.taskCheck');

    if (event.target.classList.contains('taskCheck')) {
        if (event.target.textContent == 'check_circle') {
        event.stopPropagation();
        event.target.classList.remove('taskCheckTrue');
        event.target.textContent = 'radio_button_unchecked';
        } else {
            event.stopPropagation();
            event.target.classList.add('taskCheckTrue');
            event.target.textContent = 'check_circle';
        }
    }
})
export { generateTask, generateProject, displayTasks, displayProjects }
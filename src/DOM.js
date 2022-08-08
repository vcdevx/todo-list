import { Project, projectList } from "./project";
import { taskList, filterByProject, Task, currentProject } from "./task";
import { saveTaskToLocalStorage, saveCurrentProject, saveProjectToLocalStorage } from "./storage";


const generateTask = () => {

    let newTaskBtn = document.querySelector('.newTaskBtn');
    let newTaskContainer = document.querySelector('.newTaskContainer');


    newTaskBtn.addEventListener('click', function() {

        if (projectList.length === 0) {
            alert('Please create a project first!')
        } else if (currentProject === null) {
            alert('Please create or select an existing project!')
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
        let isComplete = false; 

        let addTasks = new Task(title, dueDate, projectTitle, priority, isComplete);
        console.log(taskList);
        taskList.push(addTasks);
        console.log(localStorage);
        resetTaskList();
        displayTasks(taskList);
        
        const inputs = document.querySelectorAll('#taskName, #taskDate, #prioritySelector');
        inputs.forEach(input => {
            input.value = ''
        })
  
        newTaskContainer.style.display = 'none'; 
        newTaskBtn.style.display = 'inline';
        saveTaskToLocalStorage(taskList);
    });

    cancelTaskBtn.addEventListener('click', function() {
        newTaskContainer.style.display = 'none';
        newTaskBtn.style.display = 'inline';
    });
    

}


const displayTasks = () => {
    let taskListContainer = document.querySelector('.taskList');

    let taskIndex = 0;

    filterByProject().forEach(element => {
        let task = document.createElement('div');
        task.dataset.index = taskIndex;
        task.classList.add('task', 'lowPriority');
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
        taskDelete.dataset.index = taskIndex;
        taskIndex++;


        let taskEdit = document.createElement('span');
        taskEdit.classList.add('material-symbols-outlined', 'taskEdit');
        taskEdit.textContent = 'edit_square';

        if(element.priority == 'high') {
            task.classList.remove('lowPriority');
            task.classList.add('highPriority');
        }

        if(element.isComplete == true) {
            task.classList.add('completeTask');
            taskCheck.classList.add('taskCheckTrue');
            taskCheck.textContent = 'check_circle';
        }

        task.append(taskTitleContainer, taskDate, taskDelete);

        taskDelete.addEventListener('click', function (event) {

            if (event.target.classList.contains('deleteTaskBtn')) {
                event.stopPropagation();
                console.log(taskDelete.dataset.index);
                taskList.splice(taskDelete.dataset.index, 1);
                event.target.closest('.task').remove();
                resetTaskList();
                displayTasks();
                saveTaskToLocalStorage(taskList);
            }
        });

        taskCheck.addEventListener('click', function (event) {
            if (event.target.classList.contains('taskCheck')) {
                if (taskList[taskDelete.dataset.index].isComplete == false) {
                event.stopPropagation();
                event.target.classList.add('taskCheckTrue');
                taskList[taskDelete.dataset.index].isComplete = true;
                resetTaskList();
                displayTasks();
                saveTaskToLocalStorage(taskList);
                } else {
                    event.stopPropagation();
                    event.target.classList.remove('taskCheckTrue');
                    event.target.textContent = 'radio_button_unchecked';
                    taskList[taskDelete.dataset.index].isComplete = false;
                    resetTaskList();
                    displayTasks();
                    saveTaskToLocalStorage(taskList);
                }
            }
        })

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

        resetProjectList();
        displayProjects();
        resetTaskList();
        displayTasks();
        
        const inputs = document.querySelectorAll('#projectName');
        inputs.forEach(input => {
            input.value = '';
        })
  
        newProjectContainer.style.display = 'none'; 
        newProjectBtn.style.display = 'inline';

        saveProjectToLocalStorage(projectList);
        saveCurrentProject(currentProject);
    });

    cancelProjectBtn.addEventListener('click', function() {
        newProjectContainer.style.display = 'none';
        newProjectBtn.style.display = 'inline';
    });
}


const displayProjects = () => {
    let projectListContainer = document.querySelector('.projectList');
    let projectIndex = 0;

    projectList.forEach(element => {

        let project = document.createElement('div');
        project.classList.add('project');
        projectListContainer.append(project);
        project.dataset.index = projectIndex;
        projectIndex++

        let projectTitle = document.createElement('p');
        projectTitle.classList.add('taskTitle');
        projectTitle.textContent = element.title;

        let projectDelete = document.createElement('span');
        projectDelete.classList.add('material-symbols-outlined', 'deleteProjectBtn');
        projectDelete.textContent = 'delete';

        project.append(projectTitle, projectDelete);

        projectDelete.addEventListener('click', function (event) {
            const projectNameTarget = event.target.previousElementSibling.textContent.toString();

            if (event.target.classList.contains('deleteProjectBtn')) {
                event.stopPropagation();
                console.log(project.dataset.index);
                projectList.splice(project.dataset.index, 1);
                console.log(projectNameTarget);

                function removeTaskByProjectName (projectName, tasks){
                    for (let i = tasks.length - 1; i >= 0; i--) {
                        if (tasks[i].projectTitle === projectName) {
                            tasks.splice(i, 1);
                        } 
                    }
                }
                
                event.target.closest('.project').remove();
                removeTaskByProjectName(projectNameTarget, taskList);
                resetProjectList();
                displayProjects();
                resetTaskList();
                displayTasks();
                saveProjectToLocalStorage(projectList);
                saveTaskToLocalStorage(taskList);
                console.log(projectList);
                console.log(event.target.previousElementSibling.textContent.toString())
            }
        })

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


export { generateTask, generateProject, displayTasks, displayProjects }
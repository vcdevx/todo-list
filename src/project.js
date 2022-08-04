export class Project {
    constructor(title) {
        this.title = title;
    }
}

let projectList = [];
let defaultProject = new Project('New Project');

export { projectList, defaultProject }
import { projectDisplayArray } from "../../..";

export {createAndAppendProject}

let projectIdCount = 0;

//Creating Project
    function createProject(h1Text,pText){
        let h1TextObj = h1Text;
        let pTextObj = pText;
        let projectId = undefined;
        let todoIdCounter = 0
        let todoArray = [];
    
        return{h1TextObj,pTextObj,projectId,todoIdCounter,todoArray}
    }

    //sets the projects Id and updates the projectIdCount 
    function setAndIncreaseProjectIdCount(project){
        project.projectId = projectIdCount;
        projectIdCount++;
    }

    //Appends the newly created project to the array
    function appendProjectToArray(project,projectDisplayArray){
        projectDisplayArray.push(project);
    }

    // Wrapper function that both creates and appends the project to the selected Array
    function createAndAppendProject(h1,p,projectDisplayArray){
        let tempProject = createProject(h1,p);
        setAndIncreaseProjectIdCount(tempProject);
        appendProjectToArray(tempProject,projectDisplayArray);
        console.log(projectDisplayArray);
    }
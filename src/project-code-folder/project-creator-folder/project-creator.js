import { projectDisplayArray } from "../..";

export {createAndAppendProject}

let projectIdCount = 0;

    function createProject(h1Text,pText){
        let h1TextObj = h1Text;
        let pTextObj = pText;
        let projectId = undefined;
        let todoIdCounter = 0
        let todoArray = [];
    
        return{h1TextObj,pTextObj,projectId,todoIdCounter,todoArray}
    }

    function setAndIncreaseProjectIdCount(project){
        project.projectId = projectIdCount;
        projectIdCount++;
    }

    function appendProjectToArray(project,projectDisplayArray){
        projectDisplayArray.push(project);
    }

    function createAndAppendProject(h1,p,projectDisplayArray){
        let tempProject = createProject(h1,p);
        setAndIncreaseProjectIdCount(tempProject);
        appendProjectToArray(tempProject,projectDisplayArray);
        console.log(projectDisplayArray);
    }
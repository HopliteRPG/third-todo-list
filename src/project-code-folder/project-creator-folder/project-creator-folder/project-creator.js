import { projectDisplayArray } from "../../..";
import { uploadArrToLocStor, uploadpProjectIdCountToLocStor } from "../../../local-storage-folder/local-storage";

export {createAndAppendProject,deleteProject}

let testProjectIdCount = JSON.parse(localStorage.getItem("projectIdCount"))


let projectIdCount = testProjectIdCount++;

//Find the index of the projects id 
function findIndex(array,pId){
    function getUniqueId(object) { 
        return object.projectId === pId;
      }
    
    const selectedIndex = array.findIndex(getUniqueId);
    return selectedIndex
}

//Creating Project
    function createProject(h1Text,pText){
        let h1TextObj = h1Text;
        let pTextObj = pText;
        let projectId = undefined;
        let todoIdCounter = 0
        let todoArray = [];
        let currentProjectSelected = false;
    
        return{h1TextObj,pTextObj,projectId,todoIdCounter,todoArray,currentProjectSelected}
    }

    //sets the projects Id and updates the projectIdCount 
    function setAndIncreaseProjectIdCount(project){
        project.projectId = projectIdCount;
        projectIdCount++;
        uploadpProjectIdCountToLocStor(projectIdCount)
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

//Deleting Project
    function deleteProject(projectDisplayArray,id){
        projectDisplayArray.splice(id,1);
        console.log(projectDisplayArray)
        uploadArrToLocStor(projectDisplayArray)
    }

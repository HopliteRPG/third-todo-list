import "./styles.css";
import { createAndAppendProject } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator";
import { createAndAppendTodo } from "./todo-code-folder/todo-creator-folder/todo-creator";
import { renderProjectsInArray } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator-html";
import { renderTodosInArray } from "./todo-code-folder/todo-creator-folder/todo-creator-html";
import { projectFormSubmitLogic } from "./project-code-folder/project-form-folder/project-form";
import { setArrayOnStartUp, setIdCounterOnStartUp, uploadArrToLocStor } from "./local-storage-folder/local-storage";
import { createTodoForm } from "./todo-code-folder/todo-form-folder/todo-form-html";

export {projectDisplayArray};
let projectDisplayArray = setArrayOnStartUp()
console.log(projectDisplayArray)

setIdCounterOnStartUp()

//Creating project 0 and 1
// createAndAppendProject("testH1","testp1",projectDisplayArray);
// createAndAppendProject("testH2","testp2",projectDisplayArray);

// createAndAppendTodo("project0Todo1",projectDisplayArray[0],new Date())
// createAndAppendTodo("project0Todo2",projectDisplayArray[0],new Date())

// createAndAppendTodo("project1Todo1",projectDisplayArray[1],new Date())

// renderTodosInArray(projectDisplayArray[0])
// projectDisplayArray[0].currentProjectSelected = true;

if(projectDisplayArray.length > 0){
    function findCurrentProjectSelected(array){
        function getUniqueId(object) { 
            return object.currentProjectSelected === true;
          }
        
        const selectedIndex = array.findIndex(getUniqueId);
        return selectedIndex
    }

    let currentProjectSelected = findCurrentProjectSelected(projectDisplayArray)
    
renderProjectsInArray(projectDisplayArray)
renderTodosInArray(projectDisplayArray[currentProjectSelected])
}
else{
    renderProjectsInArray(projectDisplayArray)

}

projectFormSubmitLogic()



// uploadArrToLocStor(projectDisplayArray)



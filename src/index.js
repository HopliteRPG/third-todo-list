import "./styles.css";
import { createAndAppendProject } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator";
import { createAndAppendTodo } from "./todo-code-folder/todo-creator-folder/todo-creator";
import { renderProjectsInArray } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator-html";
import { renderTodosInArray } from "./todo-code-folder/todo-creator-folder/todo-creator-html";
import { projectFormSubmitLogic } from "./project-code-folder/project-form-folder/project-form";
import { createTodoForm } from "./todo-code-folder/todo-form-folder/todo-form-html";

export {projectDisplayArray};
let projectDisplayArray = [];

//Creating project 0 and 1
createAndAppendProject("testH1","testp1",projectDisplayArray);
createAndAppendProject("testH2","testp2",projectDisplayArray);

createAndAppendTodo("project0Todo1",projectDisplayArray[0])
createAndAppendTodo("project0Todo2",projectDisplayArray[0])

createAndAppendTodo("project1Todo1",projectDisplayArray[1])

renderProjectsInArray(projectDisplayArray)
renderTodosInArray(projectDisplayArray[0])
// projectDisplayArray[0].currentProjectSelected = true;

projectFormSubmitLogic()


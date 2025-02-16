import "./styles.css";
import { createAndAppendProject,deleteProject } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator";
import { createAndAppendTodo,deleteTodo } from "./todo-code-folder/todo-creator-folder/todo-creator";
import { renderProjectsInArray } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator-html";
import { renderTodosInArray } from "./todo-code-folder/todo-creator-folder/todo-creator-html";

export {projectDisplayArray};
let projectDisplayArray = [];

//Creating project 0 and 1
createAndAppendProject("testH1","testp1",projectDisplayArray);
createAndAppendProject("testH2","testp2",projectDisplayArray);

//Adding todos to project 0
createAndAppendTodo("project 0 todo 1",projectDisplayArray,0)
createAndAppendTodo("project 0 todo 2",projectDisplayArray,0)

//Adding todos to project 1
createAndAppendTodo("project 1 todo 1",projectDisplayArray,1)

//Deleting project 1
// deleteProject(projectDisplayArray,1)

//Deleting project 0 todo 0
// deleteTodo(projectDisplayArray,0,0)

renderProjectsInArray(projectDisplayArray)
renderTodosInArray(projectDisplayArray[0].todoArray)

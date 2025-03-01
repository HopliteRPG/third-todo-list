import "./styles.css";
import { createAndAppendProject } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator";
import { createAndAppendTodo } from "./todo-code-folder/todo-creator-folder/todo-creator";
import { renderProjectsInArray } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator-html";
import { renderTodosInArray } from "./todo-code-folder/todo-creator-folder/todo-creator-html";

export {projectDisplayArray};
let projectDisplayArray = [];

//Creating project 0 and 1
createAndAppendProject("testH1","testp1",projectDisplayArray);
createAndAppendProject("testH2","testp2",projectDisplayArray);



renderProjectsInArray(projectDisplayArray)

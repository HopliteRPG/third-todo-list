import "./styles.css";
import { createAndAppendProject } from "./project-code-folder/project-creator-folder/project-creator-folder/project-creator";
import { createAndAppendTodo } from "./todo-code-folder/todo-creator-folder/todo-creator";
export {projectDisplayArray};
let projectDisplayArray = [];

createAndAppendProject("testH1","testp1",projectDisplayArray);
createAndAppendProject("testH2","testp2",projectDisplayArray);

//Adding todos to the first project
createAndAppendTodo("project 0 todo 1",projectDisplayArray,0)
createAndAppendTodo("project 0 todo 2",projectDisplayArray,0)

//Adding todos to the second project
createAndAppendTodo("project 1 todo 1",projectDisplayArray,1)
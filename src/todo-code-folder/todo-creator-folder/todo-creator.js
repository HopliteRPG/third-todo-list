import {format} from "date-fns";
export {createAndAppendTodo,deleteTodo}

//Find the index of the projects id 
function findIndex(array,pId){
    function getUniqueId(object) { 
        return object.projectId === pId;
      }
    
    const selectedIndex = array.findIndex(getUniqueId);
    return selectedIndex
}

//Find the index of the projects id 
function findIndexTodo(array,todoIdTest){
    function getUniqueId(object) { 
        return object.todoId === todoIdTest;
      }
    
    const selectedIndex = array.findIndex(getUniqueId);
    return selectedIndex
}

//Todo Creation

    //Creating Todo
    function createTodo(description,date){
        let todoId = undefined;
        let todoDescription = description; 
        let checkedStatus = false;
        let todoDate = date;
        return {todoId,todoDescription,checkedStatus,todoDate}
    }

    //appends the todo Id and updates the todoIdCounter for the selected project
    function appendTodoIdAndUpdateTodoIdCounter(todo,project){
        todo.todoId = project.todoIdCounter
        project.todoIdCounter++
    }

    //Appending Todo To Array
    function appendTodoToArray(todo,project){
        project.todoArray.push(todo)
    }

    // Wrapper function that both creates and appends the todo to the selected projects todoArray
    function createAndAppendTodo(description,project,date){
        
        let dateWithPar = date.toString().split("-").join("/")
        let tempTodo = createTodo(description,format(dateWithPar,"MM/dd/yyyy"));
        appendTodoIdAndUpdateTodoIdCounter(tempTodo,project);
        appendTodoToArray(tempTodo,project);
    }

//Deleting Todo
function deleteTodo(projectDisplayArray,projectId,todoId){
    let projectIndex = findIndex(projectDisplayArray,projectId);
    let todoIndex = findIndexTodo(projectDisplayArray[projectIndex].todoArray,todoId);
    projectDisplayArray[projectIndex].todoArray.splice(todoIndex,1);
    console.log(projectDisplayArray)
}

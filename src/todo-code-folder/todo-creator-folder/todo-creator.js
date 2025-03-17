export {createAndAppendTodo,deleteTodo}

//Find the index of the projects id 
function findIndex(array,pId){
    function getUniqueId(object) { 
        return object.projectId === pId;
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
        let tempTodo = createTodo(description,date);
        appendTodoIdAndUpdateTodoIdCounter(tempTodo,project);
        appendTodoToArray(tempTodo,project);
    }

//Deleting Todo
function deleteTodo(projectDisplayArray,projectId,todoId){
    let projectIndex = findIndex(projectDisplayArray,projectId);
    let todoIndex = findIndex(projectDisplayArray,todoId);
    projectDisplayArray[projectIndex].todoArray.splice(todoIndex,1);
    console.log(projectDisplayArray)
}

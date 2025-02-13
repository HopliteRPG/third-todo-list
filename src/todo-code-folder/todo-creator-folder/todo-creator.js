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
    function createTodo(description){
        let todoId = undefined;
        let todoDescription = description; 
        let checkedStatus = false;
        return {todoId,todoDescription,checkedStatus}
    }

    //appends the todo Id and updates the todoIdCounter for the selected project
    function appendTodoIdAndUpdateTodoIdCounter(array,projectId,todo){
        let projectIndex = findIndex(array,projectId)
        todo.todoId = array[projectIndex].todoIdCounter;
        array[projectIndex].todoIdCounter++
    }

    //Appending Todo To Array
    function appendTodoToArray(array,projectId,todo){
        let projectIndex = findIndex(array,projectId)
        array[projectIndex].todoArray.push(todo)
    }

    // Wrapper function that both creates and appends the todo to the selected projects todoArray
    function createAndAppendTodo(description,array,projectId){
        let tempTodo = createTodo(description);
        appendTodoIdAndUpdateTodoIdCounter(array,projectId,tempTodo);
        appendTodoToArray(array,projectId,tempTodo);
    }

//Deleting Todo
function deleteTodo(projectDisplayArray,projectId,todoId){
    let projectIndex = findIndex(projectDisplayArray,projectId);
    let todoIndex = findIndex(projectDisplayArray,todoId);
    projectDisplayArray[projectIndex].todoArray.splice(todoIndex,1);
    console.log(projectDisplayArray)
}

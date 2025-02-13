//Creating Todo
function createTodo(id,description){
    let todoId = id;
    let todoDescription = description; 
    let checkedStatus = false;
    return {todoId,todoDescription,checkedStatus}
}

//Find the index of the projects id 
function findIndex(array,pId){
    function getUniqueId(object) { 
        return object.projectId === pId;
      }
    
    const selectedIndex = array.findIndex(getUniqueId);
    return selectedIndex
}

//Appending Todo To Array
function appendTodoToArray(array,projectId,todo){
    let projectIndex = findIndex(array,projectId)
    array[projectIndex].todoArray.push(todo)
}

//Wrapper function that both creates and appends the todo to the selected projects todoArray
// function createAndAppendProject(){

// }

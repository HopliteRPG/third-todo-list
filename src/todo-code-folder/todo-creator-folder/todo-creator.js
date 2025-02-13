function createTodo(id,description){
    let todoId = id;
    let todoDescription = description; 
    let checkedStatus = false;
    return {todoId,todoDescription,checkedStatus}
}
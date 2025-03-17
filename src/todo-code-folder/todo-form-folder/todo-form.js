export {todoFormButtonLogic,todoFormSubmitLogic}
import { createAndAppendTodo } from "../todo-creator-folder/todo-creator";
import { renderTodosInArray } from "../todo-creator-folder/todo-creator-html";

function todoFormButtonLogic(){
   //Dialong and Modal Code
   const dialog = document.querySelector(".todoDialog");
   const showBtn = document.querySelector(".addTodoButton");
   const closeBtn = document.querySelector(".todo-close-btn");
   const form = document.querySelector(".todoForm");
  
  
   }

   function todoFormSubmitLogic(project){
    //Dialong and Modal Code
    const dialog = document.querySelector(".todoDialog");
    const showBtn = document.querySelector(".addTodoButton");
    const closeBtn = document.querySelector(".todo-close-btn");
    const form = document.querySelector(".todoForm");
   
   
    showBtn.addEventListener("click", () => {
      dialog.showModal();
    });
   
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.close();
    });
  

   function eventTodoFunction(event){
    event.preventDefault();
    const formData = new FormData(form);
    const pText = formData.get("todo_p");
    const pDate = formData.get("todo_date_p")

     createAndAppendTodo(pText,project,pDate)
     
    renderTodosInArray(project)
     form.removeEventListener("submit",eventTodoFunction)
    
    
    form.reset();
    dialog.close();
   }
   

    form.addEventListener("submit",eventTodoFunction);


  
    }
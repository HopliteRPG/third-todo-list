export {todoFormLogic}
import { createAndAppendTodo } from "../todo-creator-folder/todo-creator";

function todoFormLogic(project){
   //Dialong and Modal Code
   const dialog = document.querySelector(".todoDialog");
   const showBtn = document.querySelector(".addTodoButton");
   const closeBtn = document.querySelector(".todo-close-btn");
   const form = document.querySelector(".todoForm");
  
   showBtn.addEventListener("click", () => {
     dialog.showModal();
   });
  
  
  
   form.addEventListener("submit",(event) => {
     event.preventDefault();
     const formData = new FormData(form);
     const pText = formData.get("todo_p")

      createAndAppendTodo(pText,project)
     
     
     form.reset();
     dialog.close();


   });
  
  
   closeBtn.addEventListener("click", (event) => {
     event.preventDefault();
     dialog.close();
   });
   }
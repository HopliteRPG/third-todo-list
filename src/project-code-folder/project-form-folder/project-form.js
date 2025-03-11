import { projectDisplayArray } from "../..";
import { renderTodosInArray } from "../../todo-code-folder/todo-creator-folder/todo-creator-html";
import { createAndAppendProject } from "../project-creator-folder/project-creator-folder/project-creator";
import { renderProjectsInArray } from "../project-creator-folder/project-creator-folder/project-creator-html";

export {projectFormButtonLogic,projectFormSubmitLogic}
function projectFormButtonLogic(){
    const contentProjectDiv = document.querySelector(".contentProjectDiv");
    //Dialong and Modal Code 
    const dialog = document.querySelector(".projectDialog");
    const showBtn = document.querySelector(".addProjectButton");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.querySelector(".projectForm");
    
    showBtn.addEventListener("click", () => {
      dialog.showModal();
    });
    
    
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.close();
    });
    }


    function projectFormSubmitLogic(){
      const contentProjectDiv = document.querySelector(".contentProjectDiv");
      //Dialong and Modal Code 
      const dialog = document.querySelector(".projectDialog");
      const showBtn = document.querySelector(".addProjectButton");
      const closeBtn = document.querySelector(".close-btn");
      const form = document.querySelector(".projectForm");
      
      
      form.addEventListener("submit",(event) => {
        event.preventDefault();
        console.log("Form submitted");
        const formData = new FormData(form);
        const h1Text = formData.get("project_h1");
        const pText = formData.get("project_p");
    
          createAndAppendProject(formData.get("project_h1"),formData.get("project_p"),projectDisplayArray)
          renderProjectsInArray(projectDisplayArray)
          renderTodosInArray(projectDisplayArray[projectDisplayArray.length-1])
          // projectDisplayArray[projectDisplayArray.length-1].currentProjectSelected = true;
  
        form.reset();
        dialog.close();
  
      });
      
      

      }
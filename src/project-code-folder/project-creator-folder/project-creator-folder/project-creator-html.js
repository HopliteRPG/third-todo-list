import { projectDisplayArray } from "../../..";
import { deleteProject } from "./project-creator";
import { projectFormLogic } from "../../project-form-folder/project-form";
import { renderTodosInArray } from "../../../todo-code-folder/todo-creator-folder/todo-creator-html";

export{renderProjectsInArray}
  //Declaring HTML Variables
  const divCreate = document.createElement("div");
  const h1Create = document.createElement("h1");
  const pCreate = document.createElement("p");
  const buttonCreate = document.createElement("button");
  const buttonContentProjectDiv = document.querySelector(".buttonContentProjectDiv")
  const contentProjectDiv = document.querySelector(".contentProjectDiv");

function createDivSection(parentDiv,div,className){
  let cloneDivCreate = div.cloneNode(true);
  cloneDivCreate.classList.add(className)
  parentDiv.appendChild(cloneDivCreate);
  return{cloneDivCreate}
}

function createP(div,p,text,className){
  let clonePCreate = p.cloneNode(true);
  clonePCreate.innerText = text;
  clonePCreate.classList.add(className);
  div.appendChild(clonePCreate);
}

function createH1(div,h1,text,className){
  let cloneH1Create = h1.cloneNode(true);
  cloneH1Create.innerText = text;
  cloneH1Create.classList.add(className);
  div.appendChild(cloneH1Create);
}

function createButton(div,button,buttonText,buttonClass){
  let cloneButtonCreate = button.cloneNode(true);
  cloneButtonCreate.innerText = buttonText;
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  return{cloneButtonCreate}
}

function setProjectHTMLID(project,id){
  project.setAttribute("id", id)

}

function clearProjectDivHolder(){
  buttonContentProjectDiv.innerText = ""
  contentProjectDiv.innerText = ""
}


  const renderProjectsInArray = (array) =>{
    clearProjectDivHolder()
    createButton(buttonContentProjectDiv,buttonCreate,"Add Project","addProjectButton");
    projectFormLogic()
    array.forEach(project => {
        let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
        let projectDivContentHolder = createDivSection(projectDiv.cloneDivCreate,divCreate,"projectDivContentHolder")
        createH1(projectDivContentHolder.cloneDivCreate,h1Create,project.h1TextObj,"projectH1")
        createP(projectDivContentHolder.cloneDivCreate,pCreate,project.pTextObj,"projectP");

        let deleteDiv = createDivSection(projectDiv.cloneDivCreate,divCreate,"deleteDiv");
        let deleteButton = createButton(deleteDiv.cloneDivCreate,buttonCreate,"Delete","deleteProjectButton");


        const projectId = project.projectId;

      projectDivContentHolder.cloneDivCreate.addEventListener("click", ()=>{
        //The pressed project is displaying its todoArray 
        //So why doesnt putting the project thats passed to renderTodosInArray add the todo to the correct project 
        renderTodosInArray(project)
        console.log(project.todoArray)
      })

        deleteButton.cloneButtonCreate.addEventListener("click", ()=>{

          function getUniqueId(project) { 
            return  project.projectId == projectId;
          }

          deleteProject(projectDisplayArray,projectDisplayArray.findIndex(getUniqueId))
          renderProjectsInArray(projectDisplayArray)
        });
    });
  }
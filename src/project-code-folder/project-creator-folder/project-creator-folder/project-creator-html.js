import { projectDisplayArray } from "../../..";
import { deleteProject } from "./project-creator";
import { projectFormButtonLogic, projectFormSubmitLogic } from "../../project-form-folder/project-form";
import { clearContentTodoDiv, renderTodosInArray } from "../../../todo-code-folder/todo-creator-folder/todo-creator-html";

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
      projectFormButtonLogic();
      array.forEach(project => {
        project.currentProjectSelected = false;
        let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
        let projectDivContentHolder = createDivSection(projectDiv.cloneDivCreate,divCreate,"projectDivContentHolder")
        createH1(projectDivContentHolder.cloneDivCreate,h1Create,project.h1TextObj,"projectH1")
        createP(projectDivContentHolder.cloneDivCreate,pCreate,project.pTextObj,"projectP");

        let deleteDiv = createDivSection(projectDiv.cloneDivCreate,divCreate,"deleteDiv");
        let deleteButton = createButton(deleteDiv.cloneDivCreate,buttonCreate,"Delete","deleteProjectButton");


        const projectId = project.projectId;

      projectDivContentHolder.cloneDivCreate.addEventListener("click", ()=>{
        project.currentProjectSelected = true;
        renderTodosInArray(project)
        console.log(project)
      })

        deleteButton.cloneButtonCreate.addEventListener("click", ()=>{

          function getUniqueId(project) { 
            return  project.projectId == projectId;
          }

          function getLastProjectOn(project){
            return  project.currentProjectSelected == true;
          }

          if(project.currentProjectSelected === false){
            deleteProject(projectDisplayArray,projectDisplayArray.findIndex(getUniqueId))
            let lastIdTest = projectDisplayArray.findIndex(getLastProjectOn)
            renderProjectsInArray(projectDisplayArray)
            renderTodosInArray(projectDisplayArray[lastIdTest]);



          }
          else if(project.currentProjectSelected === true){
            if(projectDisplayArray.length === 1){
              deleteProject(projectDisplayArray,projectDisplayArray.findIndex(getUniqueId))
              renderProjectsInArray(projectDisplayArray)
              clearContentTodoDiv()
              
            }
            else if(projectDisplayArray.findIndex(getUniqueId) === 0){
              deleteProject(projectDisplayArray,projectDisplayArray.findIndex(getUniqueId))
              renderProjectsInArray(projectDisplayArray)
              renderTodosInArray(projectDisplayArray[0])
            }
            else{
              let theCurrentId = projectDisplayArray.findIndex(getUniqueId)
              deleteProject(projectDisplayArray,projectDisplayArray.findIndex(getUniqueId))
              renderProjectsInArray(projectDisplayArray)
              renderTodosInArray(projectDisplayArray[theCurrentId-1])

            }
          }




        });
    });
    }
  
    
  
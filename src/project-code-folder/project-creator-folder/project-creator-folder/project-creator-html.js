import { projectDisplayArray } from "../../..";
import { deleteProject } from "./project-creator";

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

function createButton(div,button){
  let cloneButtonCreate = button.cloneNode(true);
  cloneButtonCreate.innerText = "Delete";
  cloneButtonCreate.classList.add("deleteProjectButton");
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
    array.forEach(project => {
        let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
        createH1(projectDiv.cloneDivCreate,h1Create,project.h1TextObj,"projectH1")
        createP(projectDiv.cloneDivCreate,pCreate,project.pTextObj,"projectP");

        let deleteDiv = createDivSection(projectDiv.cloneDivCreate,divCreate,"deleteDiv");
        let deleteButton = createButton(deleteDiv.cloneDivCreate,buttonCreate);

        const projectId = project.projectId;



        deleteButton.cloneButtonCreate.addEventListener("click", ()=>{

          function getUniqueId(project) { 
            return  project.projectId == projectId;
          }

          deleteProject(projectDisplayArray,projectDisplayArray.findIndex(getUniqueId))
          renderProjectsInArray(projectDisplayArray)
        })
    });
  }
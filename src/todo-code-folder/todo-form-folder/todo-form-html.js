const dialogCreate = document.createElement("dialog");
const formCreate = document.createElement("dialog");
const divCreate = document.createElement("div");
const h1Create = document.createElement("h1");
const pCreate = document.createElement("p");
const buttonCreate = document.createElement("button");
const inputCreate = document.createElement("input");

const todoDialogHolder = document.querySelector(".todoDialogHolder")


//Creating Html
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





function createTodoForm(){
todoDialogHolder.appendChild(dialogCreate)
}
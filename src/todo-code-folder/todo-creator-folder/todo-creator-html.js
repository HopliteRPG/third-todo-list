import { todoFormButtonLogic, todoFormSubmitLogic } from "../todo-form-folder/todo-form";

export{renderTodosInArray}

const divCreate = document.createElement("div");
const h1Create = document.createElement("h1");
const pCreate = document.createElement("p");
const buttonCreate = document.createElement("button");
const buttonContentTodoDiv = document.querySelector(".buttonContentTodoDiv");
const contentTodoDiv = document.querySelector(".contentTodoDiv");
const checkboxCreate = document.createElement("input");

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

  function createCheckbox(div,checkboxCreate,checkboxClass){
    let cloneCheckboxCreate = checkboxCreate.cloneNode(true);
    cloneCheckboxCreate.setAttribute("type", "checkbox");
    div.appendChild(cloneCheckboxCreate);
    cloneCheckboxCreate.classList.add(checkboxClass)
  } 

  function clearContentTodoDiv(){
    buttonContentTodoDiv.innerText = "";
    contentTodoDiv.innerText = "";
  }

  const renderTodosInArray = (project) =>{
    clearContentTodoDiv();
    createButton(buttonContentTodoDiv,buttonCreate,"Add Todo","addTodoButton");
    project.todoArray.forEach(todo => {
        let todoDiv = createDivSection(contentTodoDiv,divCreate,"todoDiv");
        let todoCheckbox = createCheckbox(todoDiv.cloneDivCreate,checkboxCreate,"todoCheckbox");
        createP(todoDiv.cloneDivCreate,pCreate,todo.todoDescription,"todoDescription");
        let deleteButton = createButton(todoDiv.cloneDivCreate,buttonCreate,"Delete","deleteTodoButton");
        

    });
    
    todoFormButtonLogic()
    todoFormSubmitLogic(project)
    console.log(project)
  }
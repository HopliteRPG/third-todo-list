const dialogCreate = document.createElement("dialog");
const formCreate = document.createElement("form");
const labelCreate = document.createElement("label");
const divCreate = document.createElement("div");
const h1Create = document.createElement("h1");
const pCreate = document.createElement("p");
const buttonCreate = document.createElement("button");
const inputCreate = document.createElement("input");

const todoDialogHolder = document.querySelector(".todoDialogHolder")


//Creating Html
function createDialog(parentDiv,dialog,className){
    let cloneDialogCreate = dialog.cloneNode(true);
    cloneDialogCreate.classList.add(className)
    parentDiv.appendChild(cloneDialogCreate);
    return{cloneDialogCreate}
}

function createForm(parentDiv,form,className){
    let cloneFormCreate = form.cloneNode(true);
    cloneFormCreate.classList.add(className)
    parentDiv.appendChild(cloneFormCreate);
    return{cloneFormCreate}
}

function createLabel(parentDiv,label,id){
    let cloneLabelCreate = label.cloneNode(true);
    cloneLabelCreate.setAttribute("id",id);
    parentDiv.appendChild(cloneLabelCreate);
    return{cloneLabelCreate}
}

function createInput(parentDiv,input,inputName,type,maxLengthNum,reqOrNot){
    let cloneInputCreate = input.cloneNode(true);
    cloneInputCreate.setAttribute("name",inputName);
    cloneInputCreate.setAttribute("type",type);
    cloneInputCreate.setAttribute("maxlength",maxLengthNum);
    cloneInputCreate.setAttribute("required",reqOrNot)
    parentDiv.appendChild(cloneInputCreate);

}

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
let todoDialog = createDialog(todoDialogHolder,dialogCreate,"todoDialog");
let todoForm = createForm(todoDialog,form,"todoForm");
let formDiv = createDivSection(todoForm,divCreate,"form-div");
let formTodoPDiv = createDivSection(formDiv,createDivSection,"form-todo-p-div")
let todoPLabel = createLabel(formTodoPDiv,labelCreate,"todo_p");
let todoPInput = createInput(formTodoPDiv,inputCreate,todo_p,"text",15,true);

let todoSubmitButton = createButton(formDiv,buttonCreate,"Submit","todo-submit-btn");
todoSubmitButton.setAttribute("type","submit");

let todoCloseButton = createButton(formDiv,buttonCreate,"Close","todo-close-btn")
}
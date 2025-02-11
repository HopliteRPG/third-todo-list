// Homepage Module

export {createHomepage}
import pizzaPhoto from "./photos/pizza.jpg";




function createHomepage (){
    const contentHTML = document.querySelector("#content");

    const divCreate = document.createElement("div");

    const h1Create = document.createElement("h1");


    const imageVar = document.createElement("img");
    imageVar.src = pizzaPhoto;


    const pCreate = document.createElement("p");

    function createPhoto(div,photo,className){
    photo.setAttribute("class",className);
    div.appendChild(photo)
    }

    function createDivSection(content,div,className){
        let cloneDivCreate = div.cloneNode(true);
        cloneDivCreate.classList.add(className)
        content.appendChild(cloneDivCreate);
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


    


    const headerDiv = createDivSection(contentHTML,divCreate,"headerDiv");
    const headerH1 = createH1(headerDiv.cloneDivCreate,h1Create,"Mary Maines Pizza Joint","storeTextHeader");
    const foodPhoto = createPhoto(headerDiv.cloneDivCreate,imageVar,"pizza-photo")
    

    const descriptionDiv = createDivSection(contentHTML,divCreate,"descriptionDiv");
    const descriptionP = createP(descriptionDiv.cloneDivCreate,pCreate,"Mary has the best pizza in the whole state of Maine. Everytime I go in there Im greeted with warm smiles and good food.","descriptionP");
    const descriptionPReviewer = createP(descriptionDiv.cloneDivCreate,pCreate,"Maines Best Eats","descriptionReviewerP");
    
    
    const hoursDiv = createDivSection(contentHTML,divCreate,"hoursDiv");
    const hoursH1 = createH1(hoursDiv.cloneDivCreate,h1Create,"Hours","hoursHeader");
    const hoursPMon = createP(hoursDiv.cloneDivCreate,pCreate,"Monday 6am-5pm","dayAndHoursP");
    const hoursPTue = createP(hoursDiv.cloneDivCreate,pCreate,"Tuesday 6am-11pm","dayAndHoursP");
    const hoursPWed = createP(hoursDiv.cloneDivCreate,pCreate,"Wednesday 6am-11pm","dayAndHoursP");
    const hoursPThur = createP(hoursDiv.cloneDivCreate,pCreate,"Thursday 6am-11pm","dayAndHoursP");
    const hoursPFri = createP(hoursDiv.cloneDivCreate,pCreate,"Friday 6am-11pm","dayAndHoursP");
    const hoursPSat = createP(hoursDiv.cloneDivCreate,pCreate,"Saturday 6am-11pm","dayAndHoursP");
    const hoursPSun = createP(hoursDiv.cloneDivCreate,pCreate,"Sunday 6am-11pm","dayAndHoursP");

    const locationDiv = createDivSection(contentHTML,divCreate,"locationDiv");
    const locationH1 = createH1(locationDiv.cloneDivCreate,h1Create,"Location","locationHeader")
    const locationP = createP(locationDiv.cloneDivCreate,pCreate,"123 Ship St, Portland, Maine","locationP")





   
}



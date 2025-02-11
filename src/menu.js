// Menu Module
export {createMenu}

import cocaCola from "./photos/cocacola.jpeg";
const cocaColaImg = document.createElement("img");
cocaColaImg.src = cocaCola;

import iceTea from "./photos/icetea.jpg";
const iceTeaImg = document.createElement("img");
iceTeaImg.src = iceTea;

import garlicKnots from "./photos/garlicknots.jpg";
const garlicKnotsImg = document.createElement("img");
garlicKnotsImg.src = garlicKnots;

import breadSticks from "./photos/breadsticks.jpg";
const breadSticksImg = document.createElement("img");
breadSticksImg.src =  breadSticks;

import cheesePizza from "./photos/pizza.jpg";
const cheesePizzaImg = document.createElement("img");
cheesePizzaImg.src = cheesePizza;

import spagettiAndMeatballs from "./photos/spagettiandmeatballs.jpg";
const spagettiAndMeatballsImg = document.createElement("img");
spagettiAndMeatballsImg.src = spagettiAndMeatballs;



function createMenu (){
    const contentHTML = document.querySelector("#content");

    const divCreate = document.createElement("div");

    const h1Create = document.createElement("h1");

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
    const headerH1 = createH1(headerDiv.cloneDivCreate,h1Create,"Menu","menuTextHeader");

    const beveragesH1Div = createDivSection(contentHTML,divCreate,"H1Div");
    const beveragesH1 = createH1(beveragesH1Div.cloneDivCreate,h1Create,"Beverages","beveragesH1");

    const cocaColaDiv = createDivSection(contentHTML,divCreate,"cocaColaDiv");
    const cocaColaH1 = createH1(cocaColaDiv.cloneDivCreate,h1Create,"Coca Cola","cocaColaH1");
    const cocaColaImgOnDiv = createPhoto(cocaColaDiv.cloneDivCreate,cocaColaImg,"cocaColaImg");
    const cocaColaDescP = createP(cocaColaDiv.cloneDivCreate,pCreate,"Enjoy a nice cold Coca Cola with your meal","cocaColaDescP");
    const cocaColaPriceP = createP(cocaColaDiv.cloneDivCreate,pCreate,"$5","cocaColaPriceP");

    const iceTeaDiv = createDivSection(contentHTML,divCreate,"iceTeaDiv");
    const iceTeaH1 = createH1(iceTeaDiv.cloneDivCreate,h1Create,"Ice Tea","iceTeaH1");
    const iceTeaImgOnDiv = createPhoto(iceTeaDiv.cloneDivCreate,iceTeaImg,"iceTeaImg");
    const iceTeaDescP = createP(iceTeaDiv.cloneDivCreate,pCreate,"Enjoy a nice cold Ice Tea with your meal","iceTeaDescP");
    const iceTeaPriceP = createP(iceTeaDiv.cloneDivCreate,pCreate,"$7","iceTeaPriceP");

    const sidesH1Div = createDivSection(contentHTML,divCreate,"H1Div");
    const sidesH1 = createH1(sidesH1Div.cloneDivCreate,h1Create,"Sides","sidesH1");

    const garlicKnotsDiv = createDivSection(contentHTML,divCreate,"garlicKnotsDiv");
    const garlicKnotsH1 = createH1(garlicKnotsDiv.cloneDivCreate,h1Create,"Garlic Knots","garlicKnotsH1");
    const garlicKnotsImgOnDiv = createPhoto(garlicKnotsDiv.cloneDivCreate,garlicKnotsImg,"garlicKnotsImg");
    const garlicKnotsDescP = createP(garlicKnotsDiv.cloneDivCreate,pCreate,"Enjoy nice and buttery Garlic Knots with your meal","garlicKnotsDescP");
    const garlicKnotsPriceP = createP(garlicKnotsDiv.cloneDivCreate,pCreate,"$10","garlicKnotsPriceP");
    
    const breadSticksDiv = createDivSection(contentHTML,divCreate,"breadSticksDiv");
    const breadSticksH1 = createH1(breadSticksDiv.cloneDivCreate,h1Create,"Bread Sticks","breadSticksH1");
    const breadSticksImgOnDiv = createPhoto(breadSticksDiv.cloneDivCreate,breadSticksImg,"breadSticksImg");
    const breadSticksDescP = createP(breadSticksDiv.cloneDivCreate,pCreate,"Enjoy nice and buttery Bread Sticks with your meal","breadSticksDescP");
    const breadSticksPriceP = createP(breadSticksDiv.cloneDivCreate,pCreate,"$11","breadSticksPriceP");

    const mainCourseH1Div = createDivSection(contentHTML,divCreate,"H1Div");
    const mainCourseH1 = createH1(mainCourseH1Div.cloneDivCreate,h1Create,"Main Course","mainCourseH1");

    const cheesePizzaDiv = createDivSection(contentHTML,divCreate,"cheesePizzaDiv");
    const cheesePizzaH1 = createH1(cheesePizzaDiv.cloneDivCreate,h1Create,"Cheese Pizza","cheesePizzaH1");
    const cheesePizzaImgOnDiv = createPhoto(cheesePizzaDiv.cloneDivCreate,cheesePizzaImg,"cheesePizzaImg");
    const cheesePizzaDescP = createP(cheesePizzaDiv.cloneDivCreate,pCreate,"Enjoy nice and warm Cheese Pizza as your meal","cheesePizzaDescP");
    const cheesePizzaPriceP = createP(cheesePizzaDiv.cloneDivCreate,pCreate,"$15","cheesePizzaPriceP");
    
    const spagettiAndMeatballsDiv = createDivSection(contentHTML,divCreate,"spagettiAndMeatballsDiv");
    const spagettiAndMeatballsH1 = createH1(spagettiAndMeatballsDiv.cloneDivCreate,h1Create,"Spagetti and Meatballs","spagettiAndMeatballsH1");
    const spagettiAndMeatballsImgOnDiv = createPhoto(spagettiAndMeatballsDiv.cloneDivCreate,spagettiAndMeatballsImg,"spagettiAndMeatballsImg");
    const spagettiAndMeatballsDescP = createP(spagettiAndMeatballsDiv.cloneDivCreate,pCreate,"Enjoy nice and warm Spagetti and Meatballs as your meal","garlicKnotsiceTeaDescP");
    const spagettiAndMeatballsPriceP = createP(spagettiAndMeatballsDiv.cloneDivCreate,pCreate,"$16","spagettiAndMeatballsPriceP");
}
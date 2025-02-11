// About Module

export {creatContact}


function creatContact (){
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

    const headerDiv = createDivSection(contentHTML,divCreate,"contactUsHeaderDiv");
    const headerH1 = createH1(headerDiv.cloneDivCreate,h1Create,"Contact Us","contactUsHeaderH1");

    const contactInformationDiv1 = createDivSection(contentHTML,divCreate,"contactInformationDiv");
    const contactInformationNameP1 = createP(contactInformationDiv1.cloneDivCreate,pCreate,"John Smith","contactInformationNameP");
    const contactInformationTitleP1 = createP(contactInformationDiv1.cloneDivCreate,pCreate,"Owner","contactInformationTitleP");
    const contactInformationPhoneNumberP1 = createP(contactInformationDiv1.cloneDivCreate,pCreate,"555-555-5554","contactInformationPhoneNumberP");
    const contactInformationEmailP1 = createP(contactInformationDiv1.cloneDivCreate,pCreate,"totallyRealEmail@notFake.com","contactInformationEmailP");

    const contactInformationDiv2 = createDivSection(contentHTML,divCreate,"contactInformationDiv");
    const contactInformationNameP2 = createP(contactInformationDiv2.cloneDivCreate,pCreate,"Jane Doe","contactInformationNameP");
    const contactInformationTitleP2 = createP(contactInformationDiv2.cloneDivCreate,pCreate,"Chef","contactInformationTitleP");
    const contactInformationPhoneNumberP2 = createP(contactInformationDiv2.cloneDivCreate,pCreate,"555-555-5555","contactInformationPhoneNumberP");
    const contactInformationEmailP2 = createP(contactInformationDiv2.cloneDivCreate,pCreate,"perfectlyRealEmail@notFake.com","contactInformationEmailP");

    const contactInformationDiv3 = createDivSection(contentHTML,divCreate,"contactInformationDiv");
    const contactInformationNameP3 = createP(contactInformationDiv3.cloneDivCreate,pCreate,"Jonah Smith","contactInformationNameP");
    const contactInformationTitleP3 = createP(contactInformationDiv3.cloneDivCreate,pCreate,"Waiter","contactInformationTitleP");
    const contactInformationPhoneNumberP3 = createP(contactInformationDiv3.cloneDivCreate,pCreate,"555-555-5556","contactInformationPhoneNumberP");
    const contactInformationEmailP3 = createP(contactInformationDiv3.cloneDivCreate,pCreate,"totallyRealEmailAndNotFake@notFake.com","contactInformationEmailP");



}
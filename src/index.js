import "./styles.css";
import {createHomepage} from "./homepage";
import {createMenu} from "./menu";
import {creatContact} from "./contact"

const contentHTML = document.querySelector("#content");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");


function clearContent(content){
    content.innerHTML = "";
   }


createHomepage();

homeBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    createHomepage();
})

menuBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    createMenu();
})

contactBtn.addEventListener("click", ()=>{
    clearContent(contentHTML);
    creatContact();
})




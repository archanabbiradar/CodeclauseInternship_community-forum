let mainContainer=document.getElementById("adding-forum");

function addingitem(){
    let liConatiner=document.createElement("div");
    liConatiner.classList.add("addin-item","mt-2");
    mainContainer.appendChild(liConatiner);

    let today=new Date();
    let date=today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    let time=today.getHours()+":"+today.getMinutes();
    let timedateElement=document.createElement("p");
    timedateElement.textContent=date+" "+time;
    timedateElement.classList.add("time-date");
    liConatiner.appendChild(timedateElement);

    let userInput=document.getElementById("titleInput").value;
    let h3Element=document.createElement("h3");
    h3Element.textContent=userInput;
    h3Element.classList.add("user-input");
    liConatiner.appendChild(h3Element);

    let forumContent=document.getElementById("forumTextarea");
    let disription=forumContent.value;

    let paraElement=document.createElement("p");
    paraElement.textContent=disription;
    paraElement.classList.add("forum-content");
    liConatiner.appendChild(paraElement);
}

let buttonELement=document.getElementById("addBtn");
buttonELement.onclick=function(){
    console.log("called");
    addingitem();
}
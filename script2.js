let h1Element=document.createElement("h1");
h1Element.textContent="web technologies";
document.body.appendChild(h1Element);

let containerElement=document.getElementById("container");
containerElement.appendChild(h1Element);

let buttonElement=document.createElement("button");
buttonElement.textContent="change heading";
containerElement.appendChild(buttonElement);

let removeBtnElement=document.createElement("button");
removeBtnElement.textContent="remove styles";
containerElement.append(removeBtnElement);
buttonElement.onclick=function(){
    // console.log("Heyy");
    h1Element.textContent="4.0 technologies";
    h1Element.classList.add("heading")
}
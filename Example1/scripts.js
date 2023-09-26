const check = document.getElementById("check");
check.checked = false;
document.getElementById("generator").addEventListener("click", generateElement);
document.getElementById("remover").addEventListener("click", removeElement);
let newitem = 1

function generateElement() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph";
    newParagraph.id = "new" + newitem;
    newitem++;
    document.body.appendChild(newParagraph);
}

function removeElement() {
    if (newitem > 1) {
        newitem--;
        const elementToRemove = document.getElementById("new" + newitem);
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
}

function happybutton() {
    alert("I hope you have a great day!");
}

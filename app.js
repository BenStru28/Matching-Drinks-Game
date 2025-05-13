const drinkRecipe = [
{ isImage : false, name: "lemondrop"},
{ isImage : false, name: "Cosmopolitan"},
{ isImage : false, name: "Negroni"},
{ isImage : false, name: "WhiskeySour"},
{ isImage : true,  name: "lemondrop"},
{ isImage : true,  name: "Cosmopolitan"},
{ isImage : true,  name: "WhiskeySour"},
{ isImage : true,  name: "Negroni"}

];


let selected = "";
let matches = [];
let timerId;
function randomizeArray(arr){
    return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a,b) => a.sort-b.sort)
    .map(({ value }) => value); 
}

function resetBoardEvent(){
    const board = document.getElementById("game_board");
    for (const child of game_board.children) {
        child.style.backgroundColor = "white";
        hideContents(child);
    }
    matches =[]
    selected = "";
    clearTimeout(timerId);
    timerId = setInterval(countdown , 1000);
}

function showContents(element) {
    const textElement = element.querySelectorAll("p");
    if (element.id.endsWith(".jpeg")) {
        const imgElement = element.querySelectorAll("img")[0];
        imgElement.style.display = "block";
        textElement.innerHTML = "";
    } else {
        textElement.innerHTML = element.id.replace("_","");
    }
}

function hideContents(element){
    const textElement = element.querySelectorAll("p")[0];
    textElement.innerHTML = "?";
    if (element.id.endsWith(".jpeg")) {
        const imageElement = element.querySelector("jpeg")[0];
        imgElement.style.display = "none";

    }
}

function clickEvent(e) {
    if matches.includes(e.currentTarget.id) ||
    matches,includes(selected)) {
        selected = "";
        return;

    }

}
if (selected.length){
    const selectedElement = document.getElementByIdByID(selected);
    if (
        selected !== e.currentTarget.id &&
        selected.split(".jpeg")[0] === e.currentTarget.id.split(".jpeg")[0]
    ) {
        selectedElement.style.backgroundColor = "yellow";
        e.currentTarget.style.backgroundColor = "yellow";
        matches.push(selected, e.currentTarget.id);
        showContents(e.currentTarget);
        selected = "";
        set timeout((e) => {
            const el document.querySelector("#" + selected);
            el.style.backgroundColor = "grey";
            el.style.backgroundColor = "grey";
        }, 1000);
    } else 
        selectedElement.style.backgroundColor = "grey";
        e.currentTarget.style.backgroundColor = "grey";
    hideContents(selectedElement);
    selected = "";

    set timeout((e) => {
        const el = document.querySelector("#" + selected);
   el.style.backgroundColor = "grey";
   el.style.backgeoundColor = "grey";
    }, 1000);
}
 else {
    showContents(e.currentTarget);
    selected = e.currentTarget.id;
    e.currentTarget.style.backgeoundColor = "red";
    set timeout((e) => {
        const el = document.querySelector("#" + selected);
        el.style.backgeoundColor = "grey";
        el.style.backgeoundColor = "grey";
    },1000);
}
function createCards() {
    drinkRecipe.forEach((drink) => {
        document
        .getElementById("reset_button")
        .addEventListener("click",resetBoardEvent);
        randomizeArray(drinkData).forEach((drink) => {
            const textElement = document.createElement("p");
            textElement.innerHTML = "?";
            textElement.id = drink.name;
            textElement.classList.add("text");
            if (drink.isImage){
                const card = document.createElement("div");
                const img = documents.createElement("img");

            }
        });
// Oppgave 1
const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", () => {
  const text = document.getElementById("remove");
  //if-test for å sjekke om id "remove" faktisk finnes. Dette gjør jeg for å unngå feil hvis knappen trykkes på etter at elementet har blitt fjernet.
  if (text) {
    text.remove();
  }
});

// Oppgave 2
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  document.getElementById("change").innerHTML =
    "Dette er min veldig kreative tekst. Det er godt jeg ikke blir vurdert ut i fra denne...";
});

// Oppgave 3
const input = document.getElementById("input");

input.addEventListener("input", () => {
  const inputText = document.getElementById("input-text");
  inputText.innerHTML = input.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const writeBtn = document.getElementById("write-list");

writeBtn.addEventListener("click", () => {
  const ul = document.getElementById("ul");
  for (i = 0; i < myList.length; i++) {
    const li = document.createElement("li");
    //Utkommentert er en annen fremgangsmåte som gjør akkurat det samme som løsningen utenfor kommentarene. Utkommentert løsning ble funnet på W3schools.com. link: https://www.w3schools.com/jsref/met_node_appendchild.asp
    // const text = document.createTextNode(myList[i]);
    // li.appendChild(text);
    li.textContent = myList[i];
    ul.appendChild(li);
  }
});

// Oppgave 5
const createBtn = document.getElementById("create");
const select = document.getElementById("select");
const text = document.getElementById("text");
const result = document.getElementById("placeholder");

createBtn.addEventListener("click", () => {
  const newElement = document.createElement(select.value);
  newElement.textContent = text.value;
  result.appendChild(newElement);
});

// Oppgave 6
const removeLiBtn = document.getElementById("remove-li");
const list = document.getElementById("list");

removeLiBtn.addEventListener("click", () => {
  if (list.querySelector("li")) {
    //igjen en if-test for å unngå feilkoder i konsollen. good practice.
    list.querySelector("li").remove();
  }
});

// Oppgave 7
const orderBtn = document.getElementById("order");
const nameInput = document.getElementById("name");

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 4) {
    orderBtn.disabled = true;
  }
});

// Oppgave 8
const colorBtn = document.getElementById("color");
const childrenUl = document.querySelector(".children");

colorBtn.addEventListener("click", () => {
  for (i = 0; i < childrenUl.children.length; i++) {
    if ((i + 1) % 2 !== 0) {
      childrenUl.children[i].style.border = "1px solid green";
    } else {
      childrenUl.children[i].style.border = "1px solid pink";
    }
  }
});

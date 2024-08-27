const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 },
];
// TODO: Hent HTML #id med getElementById

const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const filterBtn = document.getElementById("filter");

const result = document.getElementById("users");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const userlist = (users) => {
  result.innerHTML = "";
  for (i = 0; i < users.length; i++) {
    result.innerHTML += `<li><p>${users[i].id}</p><p>${users[i].name}</p><p>${users[i].age}</p></li>`;
  }
};
userlist(users);
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket

//laget funksjonalitet for å gjøre søket ikke case-sensitivt.
let searchResult = [];
const handleSearch = () => {
  searchResult = [];
  if (inputName != "") {
    users.map((e) => {
      if (e.name.toLowerCase().includes(inputName.value.toLowerCase())) {
        searchResult.push(e);
      }
    });
    if (searchResult != "") {
      userlist(searchResult);
    } else {
      result.innerHTML = "No results matching your search.";
    }
  } else {
    userlist(users);
  }
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret

const handleFilter = () => {
  let currentArray;
  let userResult = [];
  age = inputAge.value;
  if (searchResult != "") {
    searchResult.map((e) => {
      if (e.age >= age) {
        userResult.push(e);
      }
    });
    if (userResult != "") {
      userlist(userResult);
    } else {
      result.innerHTML = "No results matching filter and search were found.";
    }
  } else {
    users.map((e) => {
      if (e.age >= age) {
        userResult.push(e);
        userlist(userResult);
      } else {
        userlist(users);
      }
    });
  }
};

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
inputName.addEventListener("keyup", handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener("click", handleFilter);

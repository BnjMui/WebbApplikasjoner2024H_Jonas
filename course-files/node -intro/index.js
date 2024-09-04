// Benytter en innebygget modul fra Node for å lese fra terminalen
const readline = require("readline");

// Setter opp nødvendige konfigurasjon
// Les fra kommandolinjen og skriv ut til kommandolinjen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const language = "Node";

// Promter brukeren med et spørsmål i kommandolinjen
rl.question("Hva heter du? ", (name) => {
  console.log(
    `Hei ${name}. Velkommen til intro til programmering med ${name}.`
  );
  rl.close();
});

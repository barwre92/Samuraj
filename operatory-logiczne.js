const imie = "Dam1ian";
const samochod = "BMW";

// Logiczne "i"
if (imie == "Damian" && samochod == "BMW") {
  console.log("test"); // nic nie zwróci, bo jest błąd w imieniu
}
//Logiczne "lub"
if (imie == "Damian" || samochod == "BMW") {
  console.log("test"); // zwróci TEST, bo przynajmniej jedna zmienna się zgadza
}

//Logiczne NIE

console.log(!true);

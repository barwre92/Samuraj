/*
//Pierwszy sposób
function wyswietl_tekst() {
  console.log("Przykładowy tekst z funkcji");
}

wyswietl_tekst(); // wywołanie funkcji przy pomocy "()"

//Drugi sposób
const wyswietl_teskt_2 = function () {
  console.log("Przykładowy tekst z funkcji 2");
};

wyswietl_teskt_2();

//Trzeci sposób
const wyswietl_tekst_3 = () => {
  console.log("Przykładowy tekst z funkcji 3");
};

wyswietl_tekst_3();

//Przykład
const imie = "alicja";
const wiek = 33;
const zwierze = "kot";

function zwroc_tekst() {
  if (imie == "alicja") {
    console.log("Dostęp przyznany");
  } else {
    console.log("Odmowa dostępu");
  }
}

zwroc_tekst();
*/

//Parametry funkcji
/*
let pierwsza_liczba = 1;
let druga_liczba = 2;
let suma;

function dodawanie_liczb(pierwsza, druga, imie) {
  console.log(
    "Wynik:" + imie + " ma obecnie " + Number(pierwsza + druga) + " lat"
  );
  console.log(`Wynik: ${imie} ma obecnie ${Number(pierwsza + druga)} lat`); //`` "tylda" na początku i końcu zamist cudzysłowów za każdym razem
}
dodawanie_liczb(22, 11, "Damian");

let wynik;
function dodawanie_liczb(pierwsza, druga, imie) {
  return `Wynik: ${imie} ma obecnie ${Number(pierwsza + druga)} lat`; //"return" zamiast "console.log", można użyć tylko jednego słowa kluczowego "return"
}
wynik = dodawanie_liczb(22, 11, "Damian");
console.log(wynik);
*/

function odejmowanie_liczb(pierwsza_liczba, druga_liczba) {
  return pierwsza_liczba - druga_liczba;
}
const wynik_odejmowania = odejmowanie_liczb(5, 1);

function dodawanie_liczb(pierwsza, druga) {
  return pierwsza + druga + wynik_odejmowania;
}
console.log(dodawanie_liczb(100, 100));

// Porównania wartości
const imie1 = "Ala";
const imie2 = "Ala"; // ew. "ala"

console.log(imie1 == imie2);

//Porównania wartości i typu

console.log(imie1 === imie2);

const wiek1 = 7;
const wiek2 = "7";

console.log(wiek1 === wiek2);

//Różny

const samochod = "Fiat";

console.log(samochod !== "Audi");

//Większość i mniejszość
const liczba1 = 53;
const liczba2 = 63;

console.log(liczba1 >= liczba2);

if (liczba1 == 53) {
  console.log("Jest równa");
} else {
  console.log("Nie jest równa");
}

//Operator trójskładnikowy

liczba1 == 53 ? console.log("Jest równa2") : console.log("Nie jest równa2"); // pytajnik "?" - "jeśli jest równa to (if)", dwukropek ":" - "w przeciwnym wypadku (else)"

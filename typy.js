//Typ liczbowy (Number)
const liczba = 24;
const liczba2 = 21.5;

console.log(liczba - liczba2);

//Typ tekstowy (String)
const pierwszeImie = "Alicja";
const zwierze = "Kot";

console.log(pierwszeImie + "ma nowe zwierze, którym jest " + zwierze);

//Typ logiczny (Boolean)

const kobieta = false;
const mezczyzna = true;

console.log(typeof kobieta); //typeof - weryfikacja dowolnych typów zmiennych

//Typ null (typ Object)

const kolor = null;

console.log(kolor);

let imiePsa;

console.log(typeof imiePsa);

//Typ Tablice (typ Object)

const przykladowaTablica = ["Ala", "Tomek", "Czesiek", 2, true]; //nawias kwadratowy

console.log(przykladowaTablica);
console.log(przykladowaTablica[1]); // liczenie obiektów w tablicy zaczyna się od 0

//Typ obiekt

const osoba = {
  //nawias klamrowy, do modelowania duzych ilości danych
  imie: "Bolek",
  wiek: 33,
  kolorOczu: "Czarny",
  plec: "M",
};

console.log(osoba.wiek); //wybór tylko jednego parametru z całego obiektu

//Zabawa z typami danych

console.log(pierwszeImie.length);
console.log(osoba.plec.length); //mierzenie długości danego typu danych

console.log(przykladowaTablica[1].toUpperCase()); //prekształcanie wybranego stringa na same wielkie litery

const wynikDodawania = liczba + zwierze;
console.log(wynikDodawania);

console.log(liczba2.toFixed(0)); // zaokrąglanie liczby do 0 miejsc po przecinku
console.log(String(liczba)); //zmiana zmiennej liczbowej na zmienną typu string (tekstowa)

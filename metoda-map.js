const imiona = ["alicja", "tomasz", "agnieszka", "Beata", "Rafał"];
const liczby = [24, 63, 42, 68, 85];
let dziewczyny = [];
let chlopaki = [];
/*
liczby.map((liczba, index) => {
  // drugi parametr w MAP zawsze oznacza indeks wartości (liczbę porządkową)
  if (liczba > 41) {
    console.log(`Liczba ${liczba} jest większa od 41`);
  } else {
    console.log(`Liczba ${liczba} jest mniejsza lub równa 41`);
  }
});
*/

imiona.map((imie) => {
  if (imie[imie.length - 1] == "a") {
    dziewczyny.push(imie);
  } else {
    chlopaki.push(imie);
  }
});

console.log(dziewczyny);
console.log(chlopaki);

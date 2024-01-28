// let licznik = 0;

// while (licznik <= 5) {
//   console.log("Test");
//   licznik++;
// }

//Jezeli warunek pętli nie będzie spełniał wymagań już na starcie, np licznik = 6, to pętla nie ruszy

// let licznik = 1;
// const imiona = ["ala", "damian", "rafał"];

// while (licznik < imiona.length) {
//   console.log(imiona[licznik]);
//   licznik++;
// }

let licznik = 0;
const imiona = ["ala", "damian", "rafał"];

while (imiona[licznik] !== "damian") {
  console.log(imiona[licznik]);
  licznik++;
}

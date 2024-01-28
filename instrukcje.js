const plec = "kobieta"; //mezczyzna, kobieta, robot
const wiek = 22;
const zwierzeta = "kot";

//instrukcja warunkowa

/*
if (plec == "kobieta") {
  // == - "jest równe"
  console.log("Jesteś kobietą!");
} else if (plec == "robot") {
  //else if - w innym, wybranym wypadku
  console.log("Jesteś robotem!");
} else {
  // else - "w innym wypadku"
  console.log("Jesteś facetem!");
}
*/

//Wiek > 30 i osoba posiada zwierzę

/*
if (wiek > 30 && zwierzeta == "kot") {
  // && - "AND"
  console.log("Wszystko gra!");
} else {
  console.log("Coś jest nie tak!");
}
*/

if (wiek > 30 || zwierzeta == "kot") {
  // "||" - "lub"
  console.log("Wszystko gra!");
} else {
  console.log("Coś jest nie tak!");
}

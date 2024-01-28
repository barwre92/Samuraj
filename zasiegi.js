const imie = "Hania";
function test() {
  const nazwisko = "Nowak"; //zmienna wewnątrz funkcji nie może zostać wywołana przez konsolę poza tą fynkcją
  console.log(imie + " " + nazwisko);
}
test();
//console.log(nazwisko); // o tutaj!

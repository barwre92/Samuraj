const stan_swiatla = null; //true/false

// według jakiego stanu (case) ten switch będzie weryfikował, czy coś jest włączone/wyłączone i podejmuje wybraną akcję
switch (stan_swiatla) {
  case true:
    console.log("Światło zostało włączone");
    break; // case musi mieć na końcu "break" - po wykonanej akcji - przestań robić ją dalej

  case false:
    console.log("Światło zostało wyłączone");
    break;

  // default włącza się, kiedy inne stany nie są aktywne
  default:
    console.log("Awaria światła");
}

//Przykład 2

const imie = "alicja";

switch (imie) {
  case "Ewa":
    console.log("Imię to " + imie);
    break;

  default:
    console.log("Brak imienia w bazie");
}

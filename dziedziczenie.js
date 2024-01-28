class PierwszaKlasa {
  pierwsza() {
    return "Pierwsza klasa";
  }
}

//EXTENDS rozszerza metody pierwszej klasy, które posiada druga klasa
class DrugaKlasa extends DrugaKlasa {
  druga() {
    return "Druga klasa";
  }
}
const obiekt1 = new PierwszaKlasa();
const obiekt2 = new DrugaKlasa();

console.log(obiekt1.pierwsza());
console.log(obiekt2.druga());

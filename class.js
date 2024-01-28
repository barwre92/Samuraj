class samochod {
  constructor(marka, model, rok, kolor) {
    this.markaSamochodu = marka;
    this.modelSamochodu = model;
    this.rokSamochodu = rok;
    this.kolorSamochodu = kolor;
  }

  //tworzenie Metody w obrębie klasy

  przywitajSie() {
    console.log(
      `Jestem samochodem marki ${this.markaSamochodu} , model: ${this.modelSamochodu} , jestem z rocznika ${this.rokSamochodu} , mam kolor ${this.kolorSamochodu}`
    );
  }
  pokazRocznik() {
    console.log(`Rocznik samochodu to: ${this.rokSamochodu}`);
  }
}

//nowy obiekt w obrębie klasy, czyli INSTANCJA
const fiat = new samochod("Fiat", "Bravo", 2013, "czerwony");
const ford = new samochod("Ford", "Focus", 2005, "szary");

fiat.przywitajSie();
fiat.pokazRocznik();
ford.przywitajSie();
ford.pokazRocznik();

const h2band = document.querySelector("div#band"); //wyszukanie elementu

//zdarzenie "kliknięcie"
/*
h2band.addEventListener("click", () => {
  console.log("Kliknąłem w nagłówek");
});

//LUB

function showText() {
  console.log("Kliknąłem w nagłówek");
}
h2band.addEventListener("click", showText);
*/

//słówko THIS
// przy THIS nie można używać => () "arrow function"
const p = document.querySelector(".w3-justify");
p.addEventListener("click", function () {
  console.log(this); // THIS odwołuje się do elementu z funkcji, czyli tutaj "p"
});

//Event
//clientX to jedna ze współrzędnych kliknięcia myszką na stronę
p.addEventListener("click", (e) => {
  if (e.clientX > 500) {
    console.log("Wartość jest większa niż 500 i wynosi " + e.clientX);
  } else {
    console.log("Wartość jest mniejsza niż 500 i wynosi " + e.clientX);
  }
});

//Mouseover (najechanie kursorem na element) i mouseout (zjechanie kursora z elementu)
const buyTicketButton = document.querySelector("#buy-ticket");

buyTicketButton.addEventListener("mouseover", () => {
  console.log("TERAZ");
});

buyTicketButton.addEventListener("mouseout", () => {
  console.log("TERAZ2");
});

buyTicketButton.addEventListener("mouseout", (e) => {
  console.log(e);
});

//Prevent Default - blokuje wykonanie akcji, która jest domyślnie przypisana pod dany element. W tym prypadku zapobiega przekierowaniu na inną stronę po kliknięciu SEND (akcja "submit")
const formContact = document.querySelector("form");

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("TEST");
});

const link = document.querySelector(`div.w3-top div.w3-bar a[href="#contact"]`);

link.addEventListener("click", (event) => {
  event.preventDefault();
});

//Keydown, keyup - czy jakiś klawisz w polu tektowym został wciśnięty, czy odkliknięty

const inputName = document.querySelector(`input[name = "Name"]`);

inputName.addEventListener("keydown", () => {
  console.log("Uruchomiono zdarzenie");
});

inputName.addEventListener("keyup", () => {
  console.log("Uruchomiono zdarzenie UP");
});

// konsola pokazuje jaki klawisz został wciśnięty
inputName.addEventListener("keyup", (e) => {
  console.log(e.key);
});

//Scroll
window.addEventListener("scroll", () => {
  console.log("Scroll");
});

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
});

//wykonanie zdarzenia po wczytaniu się w pełni DOM
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM wczytał się");
});

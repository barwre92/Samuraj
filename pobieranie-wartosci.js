//pobrane elementy
const p = document.querySelector("p.w3-justify");
const h2Band = document.querySelector("div#band h2");
const pWeLoveMusic = document.querySelector("p.w3-opacity");
const img = document.querySelector("img.w3-image");
const inputName = document.querySelector(`input[name="Name"]`);

//metoda 1
const value = p.innerText;
console.log(value);

//metoda 2
console.log(h2Band.innerText); //jeżeli po INNERTEXT nie ma "=" to odczytujemy wartość. Jeżeli jest "=" to dodajemy wartość, którą wpiszemy

//innerHTML
console.log(pWeLoveMusic.innerHTML); //poza tekstem pokazuje znaczniki HTML

//pobieranie atrybutu
console.log(img.getAttribute("src"));

console.log(img.style.width);

//pobieranie tekstu z elementów dynamicznych (VALUE)

inputName.addEventListener("keyup", () => {
  console.log(inputName.value);
});

const form = document.querySelector("form");
const boxBand = document.querySelector("div#band");

//tworzenie nowego elementu

const divElement = document.createElement("div");
divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.backgroundColor = "red";

const p = document.createElement("p");
p.innerText = "Nowy paragraf XD";

console.log(divElement);
console.log(p);

//wstawianie elementu do HTML (DOM)
form.appendChild(divElement);
boxBand.appendChild(p);

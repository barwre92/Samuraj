const boxBand = document.querySelector("div#band");

const p = document.createElement("p");
const link = document.createElement("a");

p.innerText = "Nowy paragraf XD";
link.innerText = "Przekierowanie do GOOGLE.COM";

//dodawanie/usuwanie klas
p.classList.add("active");
p.classList.add("active2");
p.classList.remove("active");

//dodawanie, usuwanie atrybutu
link.setAttribute("href", "https://google.com"); //rodzaj atrybutu, wartość
link.removeAttribute("href");

link.id = "super-link";

boxBand.appendChild(p);
boxBand.appendChild(link);

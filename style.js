const h2Element = document.querySelector("div#band h2.w3-wide");

//zmiana koloru h2 na czerwony
let switchVariable = false;

h2Element.addEventListener("click", function () {
  if (switchVariable === false) {
    this.style.color = "red";
    this.style.fontSize = "55px";
  } else {
    this.style.color = "black";
    this.style.fontSize = "55px";
  }
  switchVariable = !switchVariable;
});

//zmiana koloru navBara
const navBar = document.querySelector("div.w3-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    navBar.style.background = "red";
  } else {
    navBar.style.background = "black";
  }
});

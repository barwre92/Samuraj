// pierwszy sposób pobierania elementów, słowo kluczowe "querySelector" (pobiera jeden element)

const h2band = document.querySelector("div#band h2.w3-wide");
const bandBox = document.querySelector("div#band");
const snapchatIcon = document.querySelector("footer i:nth-child(3)");
console.log(h2band);
console.log(bandBox);
console.log(snapchatIcon);

//drugi sposób pobierania elementów - querySelectorAll (pobiera wiele elementów)
const div = document.querySelectorAll("div");
console.log(div);

//trzeci sposób - getElementByClassName

const specialButton = document.getElementsByClassName("special");
console.log(specialButton);

//czwarty sposób - getElementById
const navDemoElement = document.getElementById("navDemo");
console.log(navDemoElement);

// czwarty sposób
const imgElement = document.getElementsByTagName("img");
console.log(imgElement);

const tablica = ["ala", 2, 5.55, true, { name: "tomek", age: 24 }];
const liczby = [1, 6, 4, 9, 2, 4];
const imiona = ["tomek", "bartek", "jurek"];

//weryfikacja długości tablicy (.LENGTH)
console.log(tablica.length);
console.log(liczby.length);

//dodawanie elemntów do  tablicy na jej koniec (PUSH)
tablica.push("Igor");
console.log(tablica);

//usuwanie elementu z końca talbicy (POP)
tablica.pop();
liczby.pop();
console.log(tablica);
console.log(liczby);

//usuwanie elementu z początku tablicy (SHIFT)
tablica.shift();
console.log(tablica);

//wskazywanie indeksu wyszukiwanego elementu z tablicy (INDEXOF)
const index_element = liczby.indexOf(6);
const index_element_2 = tablica.indexOf("ala");
console.log(index_element);
console.log(index_element_2); // jeżeli wyszukujemy element, którego nie ma w tablicy, wyskakuje wynik "-1"

//usuwanie dowolnego elementu z talbicy (SPLICE)
liczby.splice(index_element, 2); // "2" - ile elementów usunąć włącznie ze wskazanym (tutaj 6 i 4)
console.log(liczby);

//przekształcenie tablicy na stringa (JOIN)
const string_liczby = liczby.join(" "); // (" ") - separator pomiędzy elementami przekształconej tablicy
console.log(string_liczby);
console.log(typeof string_liczby);

const string_imiona = imiona.join("-");
console.log(string_imiona);

//Odwrócenie tablicy (REVERSE)
tablica.reverse();
console.log(tablica);

//Sortowanie tablicy (SORT)
imiona.sort();
console.log(imiona);

//Łączenie tablic (CONCAT)
const supertablica = liczby.concat(imiona);
console.log(supertablica);

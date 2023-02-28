const imiona = ["Alicja", "Jaś", "Krzyś", "Ola"];

//Weryfikacja długości tablicy

console.log(imiona.length>2);

//Dostęp do elementów (indexy zaczynają się od 0)

console.log(imiona[2]);
 
//Nadpisywanie elementów w tablicy

imiona[0] = "Wojtek";
//console.log(imiona);

//Dodawanie elementu do tablicy

//imiona.push("Ania");
//console.log(imiona);

//Usuwanie elementu z końca tablicy 

//imiona.pop();
//console.log(imiona);

//Usuwanie elementu z początku tablicy

//imiona.shift();
//console.log(imiona);

//Dodawanie elementu na początku tablicy

//imiona.unshift("Karol");
//console.log(imiona)

//Usuwanie konkretnego elementu z tablicy

//const indexElement = imiona.indexOf("Krzyś");

//imiona.splice(indexElement, 2); //ile elementów od tego indexu ma zostać usuniętych
//console.log(imiona);

//imiona[1]= "";
//console.log(imiona);

//Przerobieie tablicy na string

//const string = imiona.join(" ");
//console.log(string);

//Odwrócenie kolejności tablicy

//imiona.reverse();
//console.log(imiona);

//Sortowanie tablicy

//imiona.sort();

imiona.sort().reverse();

console.log(imiona); //alfabetycznie

//Mapowanie elementów w tablicy

/*imiona.map(imie => { //kady element tablicy
    if(imie.length >5){
        console.log("Imie: " + imie + " ma więcej niz 5 znaków");
    }else{
    console.log("Imie:" + imie + " ma mniej niz 5 znaków");
    }
});*/

//mergowanie

const imiona2 = ["Przemek", "Karolina", "Zuza", "Maks"];
const imiona_3 = imiona.concat(imiona2);
console.log(imiona_3);















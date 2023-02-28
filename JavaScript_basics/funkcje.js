//pierwszy sposób
funkcja1(30, 50); //tutaj wywoływanie moze być nawet nad inicjalizacją funkcji
function funkcja1(wartosc1, wartosc2) {
    const suma = wartosc1+wartosc2; //ta zmienna jest wykorzystywana tylko w tej funkcji, nie poza nią
return console.log("To ja, pierwsza funkcja " + suma);
}



//Drugi sposób

const funkcja2 = () =>{
    console.log("To ja, druga funkcja")
}







//Przekazywanie parametrów w funkcji








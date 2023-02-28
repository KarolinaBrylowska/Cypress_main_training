class Sukces{
    koncowyTekst(){
        return console.log("Dziękujemy za skorzystanie z naszego oprogramowania")
    }
}


/*class Obliczenia extends Sukces{
    get tekst(){
        return "Twoje obliczenia to: "
    }
    get komunikat(){
        return "Twoja liczba jest mniejsza od 10. "
    }
    dodawanie(){
return 2+6;
}
    mnozenie(){
        return 3*6;
    }
    koncowyRezultat(koncowaWartosc){
console.log(this.tekst+ " " + koncowaWartosc)
if (koncowaWartosc<10){
    console.log(this.komunikat)
}
    }
}*/

//const wykonajObliczenie = new Obliczenia();
//console.log(wykonajObliczenie.koncowyRezultat(wykonajObliczenie.mnozenie()));
class WyswietlImie{
    constructor(pierwImie, drugieImie){
        this.pierwszeImie = pierwImie;
        this.drugieImie = drugieImie;

    }
    koncowyTekst(){
        return console.log("Podane imie to : "+this.pierwszeImie+" oraz "+ this.drugieImie)
    }
}





const renderujImie = new WyswietlImie("Wiola", "Rafał");
console.log(renderujImie.koncowyTekst());

/// <reference types = "cypress" />

describe("E2E - Testy API",()=>{
    beforeEach(function(){
        cy.fixture("example").then(data =>{
            this.daneAPI = data;
        })
    })
    it("Weryfikacja tagów API", ()=>{
        cy.visit("https://angular.realworld.io/")
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag"); //nasłuchiwanie tego zapytania GET,
        //aliasowanie tego jako requestTag
        cy.wait("@requestTag").then(response => { //uzywamy aliasu, zapisujemy odpowiedz. Następnie odnosimy się do tych responsów i sprawdzamy jej składowe
            console.log(response);
            expect(response.response.statusCode).to.equal(200); //response czy zawiera statusCode 200
            expect(response.response.body.tags).to.contain("welcome").and.to.contain("codebaseShow"); //czy tag zawiera frazę welcome
        })
    })

    it("Niepoprawne logowanie", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLog"); //tworzymy alias i nasłuchujemy tego zapytania Post
        cy.get(" a.nav-link").contains(" Sign in ").click(); //klikamy w przycisk Sign in
        cy.login("kaka.hdhd@kak.com", "huhuh"); //wykorzystujemy sobie metodę utworzoną w commands =>
        cy.wait("@requestLog"); //czekamy na to, az ten request będzie dostępny
        cy.get("@requestLog").then(resp => { //pobieramy ten request i sprawdzamy odpowiedz
            console.log(resp); //wyświetlamy ją w konsoli
            expect(resp.response.statusCode).to.equal(403); //sprawdzamy czy ta odpowiedz zawiera status code 403
            //cy.fixture("example").then( data =>{ //tutaj wykorzystujemy plik fixtures, ale jeśli w kazdym teście 
                //musielibyśmy to wpisywać to by było kłopotliwe. Do tego słuzy beforeAll, które jest wyzej
            expect(resp.response.statusMessage).to.equal(this.daneAPI.statusMessage403); //odnosimy się do fixtures, tam okreslamy sobie rozne dane (data).
                // Pozniej sie do tych danych odnosimy.
            })
            
        })

        it("Poprawne logowanie", function(){
            cy.login(this.daneAPI.realEmail, this.daneAPI.realPassword);
            cy.intercept("GET", "https://api.realworld.io/api/tags", {fixture: 'tags.json'}).as("requestTag1");
            cy.wait("@requestTag1");
            cy.get("@requestTag1").then(resp=>{
                console.log(resp);
                expect(resp.response.body.tags).to.contain("cats");
            })
        })
    })
/// <reference types = "cypress" />

describe("E2E - Custom Commands",()=>{
    it("Przykład zastosowania komendy", ()=>{
        cy.openTshirtsTab();
        
    })

    it("Wpisywanie wartości w pole z 'wpisywanie.js'", () => {
        cy.searchPhrase("Przykładowy tekstxx {backspace}",500);
    })

    it("Czyszczenie pola po wpisaniu frazy", () => {
        cy.clearInput();
    })
})
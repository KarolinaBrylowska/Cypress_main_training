/// <reference types= "cypress" />

describe("E2E - Wpisywanie",()=>{
    it("Wpisywanie wartości w pole", ()=>{
        cy.visit("/")// to mamy określone w pliku cypress.json
        cy.get("#search_query_top").type("Przykładowy tekstxx {backspace}", {delay: 500})
    })
    it("Czyszczenie wartości z pola input", () => {
        cy.get("#search_query_top").clear()
    })
})
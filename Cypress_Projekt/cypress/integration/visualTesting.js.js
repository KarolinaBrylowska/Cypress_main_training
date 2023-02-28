/// <reference types = "cypress" />

describe("Visual regression",()=>{
    it("Wczytywanie się elementu", ()=>{
        cy.visit("https://picsum.photos/")// to mamy określone w pliku cypress.json
        cy.get("header.content-section-light").then(image => {
            //cy.wrap(image).toMatchImageSnapshot(); //tylko np dana sekcja jest brana do wizualnej regresji
            //cy.document().toMatchImageSnapshot(); cały dokument
        })
        cy.percySnapshot();
    })
})
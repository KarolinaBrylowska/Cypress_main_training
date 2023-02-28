/// <reference types= "cypress"/>

describe("E2E zmienne", ()=>{
    it("Zmienne środowiskowe", () => {
        cy.visit(Cypress.env("url"));
    })
})
        
/// <reference types = "cypress" />

describe("E2E - Akcja wgrywanie pliku",()=>{
    it("Wgrywanie pliku do inputa w Contact us", ()=>{
        cy.visit("/index.php?controller=contact")// to mamy określone w pliku cypress.json
        cy.get('#fileUpload').attachFile("../fixtures/ugryzione_logo_kolor-kopia.png")
        cy.get('.filename').should("contain", "ugryzione_logo_kolor-kopia.png")
    })
})
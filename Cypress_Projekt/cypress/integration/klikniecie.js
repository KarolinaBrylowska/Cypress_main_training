/// <reference types = "cypress" />

describe("E2E - Akcja kliknięcia",()=>{
    it("Kliknięcie na element", ()=>{
        cy.visit("/")// to mamy określone w pliku cypress.json
        cy.contains('[title="Contact us"]',"Contact us").click();
        cy.get('[title="Return to Home"]').click();
    })
})
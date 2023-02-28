/// <reference types = "cypress" />

describe("E2E - Alerty",()=>{
    it("Test związany z alertem", ()=>{
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")// to mamy określone w pliku cypress.json
        cy.get("#alert").click()
        cy.on("window:alert", text =>{
            expect(text).to.equal('Przykładowa treść alertu')
        })
    })

    it("Alert confirm", ()=>{
        cy.get("#alert-confirm").click()
        cy.on('window:confirm', tresc =>{
            expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        })
        cy.on('window:confirm', () => true)
    })
})

//pierwotna wersja alertów, a w pliku alertyPOM - to samo tylko z uyciem Page Object Model
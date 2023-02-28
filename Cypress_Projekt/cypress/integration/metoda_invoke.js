/// <reference types = "cypress" />

describe("E2E - Invoke",()=>{
    it("Invoke", ()=>{
        cy.visit("/")// to mamy określone w pliku cypress.json
        //pobieranie wartości z danego elementu
        cy.get('[title="Contact us"]').invoke("text").then(tekst =>{
            cy.log(tekst)
        }) 

        //uzyskanie dostępu do wartości atrybutu

        cy.get('[title="Contact us"]').invoke("attr", "href").then(link =>{
            cy.log(link)
        })
        
        cy.get('[title="Contact us"]').invoke("attr", "title").then(tytul =>{
            cy.log(tytul)
        })

        //pobieranie wartości value

        cy.get('#search_query_top').invoke("prop", "checked").then(value =>{
            cy.log(value)
        })
        cy.get('#search_query_top').type("Przykładowa wartość").invoke("prop", "value").then(value =>{
            cy.log(value)
        })
         
    })
})
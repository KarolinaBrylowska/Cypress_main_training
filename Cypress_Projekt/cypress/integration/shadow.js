/// <reference types = "cypress" />

describe("E2E - Shadow dom",()=>{
    it("Wykorzystanie metody shadow", ()=>{
        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm");
        //cy.contains("File");
        cy.get(".smart-ui-component").shadow().contains("Edit").click(); //bierzemy klesę z pierwszego elementu, 
        //który znajduje się nad shadow. Następnie kozystamy z metody shadow() i teraz mozemy juz się odniesc do konkretnego elementu z shadow dom
    })
})

//jest jeszcze taka moliwośc aby w cypress.json ustawić wartośc true przy includeShadowDom, wtedy 
//nie ma potrzeby uywać metody shadow
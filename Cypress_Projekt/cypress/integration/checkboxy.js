/// <reference types = "cypress" />

describe("E2E - Akcja kliknięcia checkbox",()=>{
    it("Chcekbox", ()=>{
        cy.visit("/index.php?id_category=3&controller=category")// to mamy określone w pliku cypress.json
        cy.get('#ul_layered_category_0').find("input").then(checkbox =>{
            cy.get(checkbox).eq(0).check();
            cy.get(checkbox).eq(1).check({force: true}).invoke("prop", "checked").then(zaznaczony =>{
                cy.log(zaznaczony)
            }) //jeśli coś przysłoni naszego checkboxa, to i tak zostanie on zaznaczony
        })

        cy.get('#ul_layered_id_attribute_group_1').find('input').check()

        })
})
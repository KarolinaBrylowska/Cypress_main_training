/// <reference types= "cypress"/>

describe("E2E Lesson", ()=>{
    it("Lokalizatory", () => {
        cy.visit("/")

        //Znacznik

        cy.get("a");

        //Identyfikator

        cy.get("#search_query_top")

        //Klasa

        cy.get(".form-control");

        //Atrybuty

        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokładniejszy atrybut z podaniem znacznika

        cy.get('input[placeholder="Search"]')

        //Pobieranie elementów po kilku atrybutach

        cy.get('[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Zalecana praktyka 

        cy.get('[data-cy="wyszukiwarka"]'); //programista dodaje do elementu atrybut 
        //specjalnie w celu wykorzystania go w testach Cypress

    })

    it.only("Lokalizatory czesc 2", () => {
        cy.visit("/")
        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us');
        cy.get('li').parents('#home-page-tabs').find("li").eq(1);
        cy.get('li').parents('#home-page-tabs').find("li").first();
        cy.get('li').parents('#home-page-tabs').find("li").contains("Best Sellers");
    })
})
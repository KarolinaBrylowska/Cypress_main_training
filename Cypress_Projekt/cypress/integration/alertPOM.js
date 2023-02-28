/// <reference types = "cypress" />

import alertPage from "../support/page-object/alertPage";
import AlertPage from "../support/page-object/alertPage"

describe("E2E - Alerty",()=>{
    it("Test związany z alertem1", ()=>{
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/");
        AlertPage.clickButtonAlert1();
        AlertPage.verifyAlert1Text("Przykładowa treść alertu"); //tutaj w nawiasie przekzaujemy parametr w postaci treści
        

})

    it("Test związany z alertem2", ()=>{
        AlertPage.clickButtonAlert2();
        AlertPage.verifyAlert2Text("Zaakceptuj aby kontynuować!"); //przekazujemy parametr w postaci treści
        AlertPage.rejectAlert();
        AlertPage.acceptAlert();
    })
})
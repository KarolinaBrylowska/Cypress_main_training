class SelectPage {
    get select(){
        return cy.get('#selectProductSort');
    }

    selectAllOption() {
        this.select.then(select =>{
            cy.wrap(select).find("option").each(opcja =>{
                cy.wrap(select).select(opcja.text())
            })
        })
    }
}
export default new SelectPage();
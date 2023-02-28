class AlertPage {
    get buttonAlert1(){
        return cy.get("#alert")
    }
    get buttonAlert2(){
        return cy.get("#alert-confirm")
    }
    clickButtonAlert1() {
        this.buttonAlert1.click();
    }
    clickButtonAlert2() {
        this.buttonAlert2.click();
    }
    verifyAlert1Text(text1){
        cy.on("window:alert", text =>{
            expect(text).to.equal(text1)
        })
    }

    verifyAlert2Text(text2){
        cy.on('window:confirm', tresc =>{
            expect(tresc).to.equal(text2) //parametryzacja treści
        })
    }

    rejectAlert(){
        cy.on('window:confirm', () => false)
    }

    acceptAlert(){
        cy.on('window:confirm', () => true)
    }

}

export default new AlertPage();
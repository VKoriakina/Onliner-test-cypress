
class Browser {

    async navigateToMainPage(){
        cy.log('Open cite');
        cy.visit('/')
    }
}

module.exports = new Browser();
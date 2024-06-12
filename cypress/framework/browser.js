const { baseUrl } = require('../../cypress.config');

class Browser {

    async navigateToMainPage(){
        cy.log('Open cite');
        cy.visit(baseUrl)
    }
}

module.exports = new Browser();
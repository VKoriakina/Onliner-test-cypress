const browser = require('../framework/browser');
const mainPage = require('../page-objects/pages/main-page');

describe('Nav Menus', () => {
    context('1080p resolution', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
        });


        it('should filter tv', () => {
            browser.navigateToMainPage();
            mainPage.navigateMainMenu('Каталог');
        });

    });
});

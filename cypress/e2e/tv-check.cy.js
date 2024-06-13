const browser = require('../framework/browser');
const mainPage = require('../page-objects/pages/main-page');
const cataloguePage=require('../page-objects/pages/catalogue-page');
const tvPage =require('../page-objects/pages/tv-page')


describe('framework and test-data setup', () => {
    beforeEach(() => {
        browser.setViewportAndNavigate(1920, 1080);
    });

        it('should filter tv', () => {
            cy.fixture('../test-data/test-data.json').then((data) => {
                const tvData = data.tv

            mainPage.navigateMainMenu('Каталог');
            cataloguePage.navigateTVpage('Электроника','Телевидение', 'Телевизоры' );
            tvPage.selectTitle(tvData.title);
            tvPage.selectResolution(tvData.resolution);
            tvPage.selectDiagonalMin(tvData.diagonalMin);
            tvPage.selectDiagonalMax(tvData.diagonalMax);
            tvPage.selectPrice(tvData.price);
            cy.pause();


            });

        });
});

const mainMenu = require("../menu/main-menu");

class TvPage {
    constructor() {
        this.elements = {
            chbLocator: (item) => cy.xpath(`//div[@class='catalog-form__checkbox-sign' and text()='${item}']`),
            rootLocator: () => cy.xpath("//div[@class='catalog-form__offers-list']"),
            chbDiagonalLocator: (item) => cy.xpath(`//div[@class='catalog-form__checkbox-sign' and  contains(text(), '${item}"')]`),
            fldPriceLocator: () => cy.xpath('//input[@type = "text" and @placeholder = "до"]'),
            arrTitlesLocator: () => this.elements.rootLocator().xpath("//a[@class='catalog-form__link catalog-form__link_primary-additional catalog-form__link_base-additional catalog-form__link_font-weight_semibold catalog-form__link_nodecor']"),
            arrPriceLocator: () => this.elements.rootLocator().xpath("//a[@class='catalog-form__link catalog-form__link_nodecor catalog-form__link_primary-additional catalog-form__link_huge-additional catalog-form__link_font-weight_bold']"),
            arrDetails: () => this.elements.rootLocator().xpath("//div[@class ='catalog-form__parameter-part catalog-form__parameter-part_1' ]/child::div[1]")
        }
    }

    selectTitle (name){
        cy.intercept('GET', '**/search/**').as('searchRequest');
        this.elements.chbLocator(name).click();
        cy.wait('@searchRequest');

    }

    selectResolution (name){
        cy.intercept('GET', '**/search/**').as('searchRequest');
        this.elements.chbLocator(name).click();
        cy.wait('@searchRequest');
    }

    async selectDiagonalMin(name) {
        cy.intercept('GET', '**/search/**').as('searchRequest');
        this.elements.chbDiagonalLocator(name).click();
        cy.wait('@searchRequest');
        }

    async selectDiagonalMax(name) {
        cy.intercept('GET', '**/search/**').as('searchRequest');
        this.elements.chbDiagonalLocator(name).click();
        cy.wait('@searchRequest');
    }

    async selectPrice (name){
        cy.intercept('GET', '**/search/**').as('searchRequest');
        this.elements.fldPriceLocator().type(name);
        cy.wait('@searchRequest');
    }

    checkTitles(tv) {
        const searchTitles = this.elements.arrTitlesLocator();
        searchTitles.should('have.length.greaterThan', 0);
        searchTitles.each(($el) => {
            cy.wrap($el).should('contain', tv.title);
        });
    }

    checkPrice(tv) {
        const intPrice = Number.parseInt(tv.price);
        this.elements.arrPriceLocator().then($prices => {
            expect($prices.length, 'should have at least one item').to.be.greaterThan(0);
            Cypress._.each($prices, $price => {
                const priceText = $price.innerText;
                const numericString = priceText.replace(/[^\d,]/g, '');
                const floatNumber = parseFloat(numericString.replace(',', '.'));
                expect(floatNumber, `should be less than ${tv.price}`).to.be.lessThan(intPrice);
            });
        });
    }

    checkResolution(tv) {
        const arrResolution = this.elements.arrDetails();

        arrResolution.should('have.length.greaterThan', 0);

        arrResolution.each((sizeLocator) => {
            cy.wrap(sizeLocator).should('contain.text', tv.resolution);
        });
    }

    checkDiagonal(tv) {
        const arrDetails = this.elements.arrDetails();
        arrDetails.should('have.length.greaterThan', 0).each((element) => {
            cy.wrap(element).invoke('text').then((text) => {
                const [size] = text.split(' ');
                const diag = Number.parseInt(size, 10);
                expect(diag, `should be greater than or equal to ${tv.diagonalMin}`).to.be.gte(tv.diagonalMin);
                expect(diag, `should be less than or equal to ${tv.diagonalMax}`).to.be.lte(tv.diagonalMax);
            });
        });
    }

}

module.exports = new TvPage();
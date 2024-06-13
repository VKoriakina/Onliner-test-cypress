const mainMenu = require("../menu/main-menu");

class TvPage {
    constructor() {
        this.elements = {
            chbLocator: (item) => cy.xpath(`//div[@class='catalog-form__checkbox-sign' and text()='${item}']`),
            rootLocator: () => cy.xpath("//div[@class='catalog-form__offers-list']"),
            arrTitlesLocator: () => this.elements.rootLocator().xpath("//a[@class='catalog-form__link catalog-form__link_primary-additional catalog-form__link_base-additional catalog-form__link_font-weight_semibold catalog-form__link_nodecor']"),
            chbDiagonalLocator: (item) => cy.xpath(`//div[@class='catalog-form__checkbox-sign' and  contains(text(), '${item}"')]`),
            fldPriceLocator: () => cy.xpath('//input[@type = "text" and @placeholder = "до"]')
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



}

module.exports = new TvPage();
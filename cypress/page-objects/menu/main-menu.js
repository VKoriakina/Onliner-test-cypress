class MainMenu {
    constructor() {
        this.elements = {
            mainMenuLocator: (item) => cy.xpath(`//span[@class ="b-main-navigation__text" and contains(text(), '${item}')]`),
            menuLocator: (item) => cy.xpath(`//span[@class ="catalog-navigation-classifier__item-title-wrapper" and contains(text(), '${item}')]`)
        };
    }

    async navigateMenuItem(name) {
        await this.elements.mainMenuLocator(name).should('be.visible').click();
    }

    async selectCatalogItem(name) {
        await this.elements.menuLocator(name).should('be.visible').click();
    }
}

module.exports = new MainMenu();

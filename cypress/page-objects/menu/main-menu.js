class MainMenu {
    constructor() {
        this.elements = {
            mainMenuLocator: (item) => cy.xpath(`//span[@class ="b-main-navigation__text" and contains(text(), '${item}')]`),
            menuLocator: (item) => cy.xpath(`//span[@class ="catalog-navigation-classifier__item-title-wrapper" and contains(text(), '${item}')]`),
            subMenuLocator:(item) => cy.xpath(`//div[@class ="catalog-navigation-list__aside-title" and contains(text(), '${item}')]`),
            subSubMenuLocator:(item) => cy.xpath(`//span[@class ="catalog-navigation-list__dropdown-title" and contains(text(), '${item}')]`)
        };
    }

   navigateMainMenuItem(name) {
       this.elements.mainMenuLocator(name).should('be.visible').click();
    }

    selectMenuItem(name) {
        this.elements.menuLocator(name).should('be.visible').click();
    }

    selectSubMenuItem(name) {
       this.elements.subMenuLocator(name).should('be.visible').trigger('mouseover');
    }

    selectSubSubMenuItem(name) {
        this.elements.subSubMenuLocator(name).should('be.visible').click();
    }

}

module.exports = new MainMenu();

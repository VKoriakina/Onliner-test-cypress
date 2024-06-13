import mainMenu from "../menu/main-menu"

class CataloguePage {
    navigateTVpage (name1, name2, name3){
        mainMenu.selectMenuItem(name1);
        mainMenu.selectSubMenuItem(name2);
        mainMenu.selectSubSubMenuItem(name3);
    }


}

module.exports = new CataloguePage();
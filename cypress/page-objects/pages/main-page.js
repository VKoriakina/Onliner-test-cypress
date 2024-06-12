import mainMenu from "../menu/main-menu"

class MainPage {
async navigateMainMenu(name){
   await  mainMenu.navigateMenuItem(name);
}
}

module.exports = new MainPage();
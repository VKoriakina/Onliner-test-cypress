import mainMenu from "../menu/main-menu"

class MainPage {
async navigateMainMenu(name){
   await  mainMenu.navigateMainMenuItem(name);
}

}

module.exports = new MainPage();
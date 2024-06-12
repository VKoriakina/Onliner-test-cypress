const {Browser} = require('../framework/browser');

describe('Tv check', () => {
    const browser = new Browser();
    it('should navigate to main page', () => {
        browser.navigateToMainPage();
    });
})
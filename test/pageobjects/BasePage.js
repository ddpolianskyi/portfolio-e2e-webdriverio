const fixtures = require('../fixtures/fixtures.json');

const LoginPage = require('./LoginPage');

class BasePage {
    get shoppingCartIcon(){ return $('.shopping_cart_link') };

    async open(){
        await browser.url('/');
    };
    async login(){
        await LoginPage.enterUsername(fixtures.validUsername);
        await LoginPage.enterPassword(fixtures.validPassword);
        await LoginPage.loginButton.click();
        await expect(LoginPage.errorMessage).not.toBeDisplayed();
        await expect(browser).toHaveUrl(/inventory.html$/);
    };
};

module.exports = new BasePage();
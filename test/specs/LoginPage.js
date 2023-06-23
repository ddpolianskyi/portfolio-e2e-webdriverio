const fixtures = require('../fixtures/fixtures.json');

const BasePage = require('../pageobjects/BasePage');
const LoginPage = require('../pageobjects/LoginPage');

const errorMessages = [
    'Epic sadface: Username is required',
    'Epic sadface: Password is required',
    'Epic sadface: Username and password do not match any user in this service',
    'Epic sadface: Sorry, this user has been locked out.'
];

beforeEach(async () => {
    await BasePage.open();
});

describe('Login', () => {
    it('Should login with valid credentials', async () => {
        await LoginPage.enterUsername(fixtures.validUsername);
        await LoginPage.enterPassword(fixtures.validPassword);
        await LoginPage.loginButton.click();
        await expect(LoginPage.errorMessage).not.toBeDisplayed();
        await expect(browser).toHaveUrl(/inventory.html$/)
    });

    it('Should not login with empty fields', async () => {
        await LoginPage.loginButton.click();
        await LoginPage.checkError(errorMessages[0]);
    });

    it('Should not login with empty password field', async () => {
        await LoginPage.enterUsername(fixtures.validUsername);
        await LoginPage.loginButton.click();
        await LoginPage.checkError(errorMessages[1]);
    });

    it('Should not login with non-existing user credentials', async () => {
        await LoginPage.enterUsername(fixtures.nonExistingUsername);
        await LoginPage.enterPassword(fixtures.validPassword);
        await LoginPage.loginButton.click();
        await LoginPage.checkError(errorMessages[2]);
    });

    it('Should not login with locked out user credentials', async () => {
        await LoginPage.enterUsername(fixtures.lockedOutUsername);
        await LoginPage.enterPassword(fixtures.validPassword);
        await LoginPage.loginButton.click();
        await LoginPage.checkError(errorMessages[3]);
    });
});
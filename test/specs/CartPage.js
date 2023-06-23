const fixtures = require('../fixtures/fixtures.json');

const BasePage = require('../pageobjects/BasePage');
const CartPage = require('../pageobjects/CartPage');

const errorMessages = [
    'Error: First Name is required',
    'Error: Last Name is required',
    'Error: Postal Code is required'
];

beforeEach(async () => {
    await BasePage.open();
    await BasePage.login();
});

describe('Shopping cart', () => {
    it('Returning to the inventory page from the shopping cart page', async () => {
        await BasePage.shoppingCartIcon.click();
        await expect(browser).toHaveUrl(/cart.html$/);
        await CartPage.continueShoppingButton.click();
        await expect(browser).toHaveUrl(/inventory.html$/);
    });

    it('Making an order using checkout', async () => {
        await BasePage.shoppingCartIcon.click();
        await CartPage.checkoutButton.click();
        await CartPage.checkoutContinueButton.click();
        await CartPage.checkCheckoutError(errorMessages[0]);

        await CartPage.enterCheckoutFirstName(fixtures.firstName);
        await CartPage.checkoutContinueButton.click();
        await CartPage.checkCheckoutError(errorMessages[1]);

        await CartPage.enterCheckoutLastName(fixtures.lastName);
        await CartPage.checkoutContinueButton.click();
        await CartPage.checkCheckoutError(errorMessages[2]);

        await CartPage.enterCheckoutPostalCode(fixtures.postalCode);
        await CartPage.checkoutContinueButton.click();
        await CartPage.checkoutFinishButton.click();
        await expect(CartPage.checkoutSuccessMessage).toBeDisplayed();
    });
});
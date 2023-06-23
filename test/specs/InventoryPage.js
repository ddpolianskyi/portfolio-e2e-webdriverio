const BasePage = require('../pageobjects/BasePage');
const InventoryPage = require('../pageobjects/InventoryPage');
const CartPage = require('../pageobjects/CartPage');

beforeEach(async () => {
    await BasePage.open();
    await BasePage.login();
});

describe('Inventory', () => {
    it('The inventory item details page should be open', async () => {
        const itemTitle = await InventoryPage.itemTitle(1).getText();
        await InventoryPage.itemTitle(1).click();
        await expect(InventoryPage.itemDetailsName).toBeDisplayed();
        await expect(InventoryPage.itemDetailsName).toHaveText(itemTitle);
        await expect(browser).toHaveUrl(/.*inventory-item.html/);
    });

    it('The inventory item should be moved to the shopping cart', async () => {
        const itemTitle = await InventoryPage.itemTitle(1).getText();
        await InventoryPage.itemAddToCartButton(1).click();
        await expect(InventoryPage.itemRemoveFromCartButton(1)).toBeDisplayed();
        await BasePage.shoppingCartIcon.click();
        await expect(browser).toHaveUrl(/cart.html$/);
        await expect(CartPage.itemTitle(1)).toBeDisplayed();
        await expect(CartPage.itemTitle(1)).toHaveText(itemTitle);
    });

    it('The inventory item should be removed from the shopping cart', async () => {
        if( await InventoryPage.itemAddToCartButton(1).isDisplayed() ){
            await InventoryPage.itemAddToCartButton(1).click();
        };
        await expect(InventoryPage.itemRemoveFromCartButton(1)).toBeDisplayed();
        await BasePage.shoppingCartIcon.click();
        await expect(browser).toHaveUrl(/cart.html$/);
        await expect(CartPage.cartItems).toBeDisplayed();
        await CartPage.itemRemoveFromCartButton(1).click();
        await expect(CartPage.cartItems).not.toBeDisplayed();
    });
});
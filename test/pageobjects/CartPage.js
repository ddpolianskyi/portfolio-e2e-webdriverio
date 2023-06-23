class CartPage {
    get cartItems(){ return $('.cart_item') };

    get continueShoppingButton(){ return $('[data-test="continue-shopping"]') };
    get checkoutButton(){ return $('[data-test="checkout"]') };
    
    get checkoutFirstNameField(){ return $('#first-name') };
    get checkoutLastNameField(){ return $('#last-name') };
    get checkoutPostalCodeField(){ return $('#postal-code') };
    get checkoutContinueButton(){ return $('#continue') };
    get checkoutFinishButton(){ return $('#finish') };
    get checkoutErrorMessage(){ return $('[data-test="error"]') };
    get checkoutSuccessMessage(){ return $('.complete-header') };

    itemTitle(num){ return $(`//*[@class="cart_item"][${num}]//*[@class="inventory_item_name"]`) };
    itemRemoveFromCartButton(num){ return $(`//*[@class="cart_item"][${num}]//*[contains(@data-test, "remove")]`) };

    async enterCheckoutFirstName(firstName){
        await this.checkoutFirstNameField.addValue(firstName);
        await expect(this.checkoutFirstNameField).toHaveValue(firstName);
    };
    async enterCheckoutLastName(lastName){
        await this.checkoutLastNameField.addValue(lastName);
        await expect(this.checkoutLastNameField).toHaveValue(lastName);
    };
    async enterCheckoutPostalCode(postalCode){
        await this.checkoutPostalCodeField.addValue(postalCode);
        await expect(this.checkoutPostalCodeField).toHaveValue(postalCode);
    };
    async checkCheckoutError(errorName){
        await expect(this.checkoutErrorMessage).toBeDisplayed();
        await expect(this.checkoutErrorMessage).toHaveText(errorName);
    };
};

module.exports = new CartPage();
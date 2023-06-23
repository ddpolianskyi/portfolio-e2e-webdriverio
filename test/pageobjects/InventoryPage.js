class InventoryPage {
    get itemDetailsName(){ return $('.inventory_details_name') };
    itemTitle(num){ return $(`//*[@class="inventory_item"][${num}]//*[@class="inventory_item_name"]`) };
    itemAddToCartButton(num){ return $(`//*[@class="inventory_item"][${num}]//*[contains(@data-test, "add-to-cart")]`) };
    itemRemoveFromCartButton(num){ return $(`//*[@class="inventory_item"][${num}]//*[contains(@data-test, "remove")]`) };

    async clickItemTitle(num){
        await this.itemTitle(num).click();
        await expect(this.itemDetailsName).toBeDisplayed();
        await expect(browser).toHaveUrl(/inventory-item.html$/);
    };
};

module.exports = new InventoryPage();
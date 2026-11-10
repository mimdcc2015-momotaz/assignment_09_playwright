import { Base } from './base.js';

export class InventoryPage extends Base {
    constructor(page) {
        super(page);
        // Updated to target the specific data-test attribute and avoid strict mode violation
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.title = page.locator('.title');
    }

    async isLoaded() {
        await this.inventoryContainer.waitFor({ state: 'visible' });
        return await this.title.isVisible();
    }
}
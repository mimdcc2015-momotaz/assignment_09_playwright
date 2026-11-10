import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.js';
import { InventoryPage } from '../pages/inventorypage.js';

// Use ES module JSON import instead of require()
import users from '../data/users.json' assert { type: 'json' };

test.describe('Sauce Demo Data-Driven Login Tests', () => {
  for (const data of users) {
    test(`Login test for user: ${data.username} (Expected: ${data.expected})`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.login(data.username, data.password);

      if (data.expected === 'success') {
        const loaded = await inventoryPage.isLoaded();
        expect(loaded).toBeTruthy();
      } else {
        const errorText = await loginPage.getErrorMessage();
        expect(errorText.length).toBeGreaterThan(0);
      }
    });
  }
});
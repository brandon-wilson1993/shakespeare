import { expect, test as setup } from '@playwright/test';
import path from 'path';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('before all', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    await expect(page.locator('div[class="app_logo"]')).toContainText('Swag Labs');


    await page.context().storageState({ path: authFile });
});
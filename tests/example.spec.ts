import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  console.log('before each');

  await page.goto('https://www.saucedemo.com/inventory.html');
});


test('has title', async ({ page }) => {

  console.log('has title');
  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

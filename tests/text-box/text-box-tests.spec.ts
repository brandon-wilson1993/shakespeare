import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');
});

test('Address is Displayed Correctly', async ({ page }) => {

  const address : string = '123 Testing Avenue 60443';

  await page.fill('#address', address);
  await page.press('#address', 'Tab');

  await expect(page.locator('#address')).toHaveValue(address);
});

test('Email is Displayed Correctly', async ({ page }) => {

  const email : string = 'testing@gmail.com';

  await page.fill('#email', email);
  await page.press('#email', 'Tab');

  await expect(page.locator('#email')).toHaveValue(email);
});

test('Fill Out Page and Click Submit', async ({ page }) => {

  const address : string = '123 Testing Avenue 60443';
  const email : string = 'testing@gmail.com';
  const fullName : string = 'Testing';
  const password : string = 'Password123';

  await page.fill('#address', address);
  await page.fill('#email', email);
  await page.fill('#fullname', fullName);
  await page.fill('#password', password);

  await page.click('input[type="submit"]');

  await expect(page.locator('#address')).toHaveValue('');
  await expect(page.locator('#email')).toHaveValue('');
  await expect(page.locator('#fullname')).toHaveValue('');
  await expect(page.locator('#password')).toHaveValue('');
});

test('Full Name is Displayed Correctly', async ({ page }) => {

  const fullName : string = 'Testing';

  await page.fill('#fullname', fullName);
  await page.press('#fullname', 'Tab');

  await expect(page.locator('#fullname')).toHaveValue(fullName);
});

test('Password is Displayed Correctly', async ({ page }) => {

  const password : string = 'Password123';

  await page.fill('#password', password);
  await page.press('#fullname', 'Tab');

  await expect(page.locator('#password')).toHaveValue(password);
});

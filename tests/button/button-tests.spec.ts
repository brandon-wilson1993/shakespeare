import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/buttons.php"
  );
  await page.reload();
});

test("Click Me Button", async ({ page }) => {
  const message: string = "You have done a dynamic click";

  await page.click(".btn.btn-primary");

  await expect(page.locator("#welcomeDiv")).toHaveText(message);
});

test("Double Click Me Button", async ({ page }) => {
  const message: string = "You have Double clicked";

  await page.dblclick(".btn.btn-success");

  await expect(page.locator("#welcomeDiv")).toHaveText(message);
});

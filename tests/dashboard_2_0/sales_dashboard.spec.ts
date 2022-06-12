import { test, expect } from '@playwright/test';

test('Sales Dashboard @dashboard', async ({ page }) => {

  // Go to https://sapaad-reporting-ms-review.herokuapp.com/
  await page.goto('https://sapaad-reporting-ms-review.herokuapp.com/');

  // Click text=Sales
  await page.locator('text=Sales').click();
  await expect(page).toHaveURL('https://sapaad-reporting-ms-review.herokuapp.com/sales');

  // Take a screenshot
  await page.screenshot({ path: 'artifacts/screenshot.png', fullPage: true });

  // Make sure the list now has two todo items.
  await expect(page.locator('h1')).toHaveText('Sales');
});
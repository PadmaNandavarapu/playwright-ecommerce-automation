import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  // Step 1: Open website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter username
  await page.locator('#user-name').fill('standard_user');

  // Step 3: Enter password
  await page.locator('#password').fill('secret_sauce');

  // Step 4: Click login
  await page.locator('#login-button').click();

  // Step 5: Verify login success
  await expect(page).toHaveURL(/inventory/);

});
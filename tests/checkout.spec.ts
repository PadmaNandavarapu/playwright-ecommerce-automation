import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Checkout Test', async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();

  await page.locator('#checkout').click();

  await page.locator('#first-name').fill('Padma');
  await page.locator('#last-name').fill('QA');
  await page.locator('#postal-code').fill('530001');

  await page.locator('#continue').click();
  await page.locator('#finish').click();

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});
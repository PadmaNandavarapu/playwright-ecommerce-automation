import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Add to Cart Test using POM', async ({ page }) => {

  const login = new LoginPage(page);

  // Login
  await login.navigate();
  await login.login('standard_user', 'secret_sauce');

  // Add product to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Open cart
  await page.locator('.shopping_cart_link').click();

  // Verify product
  const product = await page.locator('.inventory_item_name').textContent();
  expect(product).toContain('Sauce Labs Backpack');

});
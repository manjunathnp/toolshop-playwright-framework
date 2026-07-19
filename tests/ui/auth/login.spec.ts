import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

test('login with valid credentials', async({ page }) => {
    const loginPage = new LoginPage(page); 
    
    await page.goto('/auth/login');
    await expect(page).toHaveURL(/practicesoftwaretesting/);
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
    await expect(page.getByTestId('nav-home')).toBeVisible();
});
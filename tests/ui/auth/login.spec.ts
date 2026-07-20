import { test, expect } from '../../../fixtures/pages.fixture';
import { customerUser, invalidUser } from '../../../test-data/staticUsers';
import { LOGIN_ERRORS } from '../../../utils/constants';

test.describe("Login Scenarios Validations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/auth/login");
  });

  test("Login with valid credentials", async ({ loginPage, page }) => {

    await expect(page).toHaveURL('/auth/login');    
    await loginPage.login(customerUser.email, customerUser.password);
    await expect(page.getByTestId("nav-home")).toBeVisible();
  });

  test("Login with invalid email and invalid password", async ({ loginPage, page }) => {

    await expect(page).toHaveURL('/auth/login');

    await loginPage.login(invalidUser.email, invalidUser.password);

    const actualLoginErrorMessage = await loginPage.getLoginErrorMessage();
    expect(actualLoginErrorMessage).toBe(LOGIN_ERRORS.INVALID_CREDENTIALS);
  });

  test("login with valid email and blank password", async ({ loginPage, page }) => {

    await expect(page).toHaveURL('/auth/login');
    await loginPage.login(customerUser.email, "");

    const actualPasswordErrorMessage =
      await loginPage.getPasswordErrorMessage();
    expect(actualPasswordErrorMessage).toBe(LOGIN_ERRORS.PASSWORD_REQUIRED);
  });

  test('login with valid email and invalid password', async({ loginPage, page }) => {

    await expect(page).toHaveURL('/auth/login');
    await loginPage.login(customerUser.email, invalidUser.password);

    const actualErrorMessage = await loginPage.getLoginErrorMessage();
    expect(actualErrorMessage).toBe(LOGIN_ERRORS.INVALID_CREDENTIALS);
  })

  test("login with blank email and valid password", async ({ loginPage, page }) => {

    await expect(page).toHaveURL('/auth/login');

    await loginPage.login("", customerUser.password);

    const actualEmailErrorMessage = await loginPage.getEmailErrorMessage();
    expect(actualEmailErrorMessage).toBe(LOGIN_ERRORS.EMAIL_REQUIRED);
  });
});

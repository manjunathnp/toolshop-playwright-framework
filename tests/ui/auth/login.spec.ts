import { test, expect } from '../../../fixtures/pages.fixture';

test.describe("Login Scenarios Validations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/auth/login");
  });

  test("Login with valid credentials", async ({ loginPage, page }) => {

    await expect(page).toHaveURL(/practicesoftwaretesting/);
    await loginPage.login("customer@practicesoftwaretesting.com", "welcome01");
    await expect(page.getByTestId("nav-home")).toBeVisible();
  });

  test("Login with invalid email and invalid password", async ({ loginPage, page }) => {

    const expectedLoginErrorMessage: string = "Invalid email or password";
    await expect(page).toHaveURL(/practicesoftwaretesting/);
    await loginPage.login(
      "customer@practicesoftwaretestinginvalid.com",
      "invalidwelcome01",
    );

    const actualLoginErrorMessage = await loginPage.getLoginErrorMessage();
    expect(actualLoginErrorMessage).toBe(expectedLoginErrorMessage);
  });

  test("login with valid email and blank password", async ({ loginPage, page }) => {

    const expectedPasswordErrorMessage = "Password is required";

    await expect(page).toHaveURL(/practicesoftwaretesting/);
    await loginPage.login("customer@practicesoftwaretesting.com", "");

    const actualPasswordErrorMessage =
      await loginPage.getPasswordErrorMessage();
    expect(actualPasswordErrorMessage).toBe(expectedPasswordErrorMessage);
  });

  test("login with blank email and valid password", async ({ loginPage, page }) => {

    const expectedEmailErrorMessage = "Email is required";

    await expect(page).toHaveURL(/practicesoftwaretesting/);
    await loginPage.login("", "welcome01");

    const actualEmailErrorMessage = await loginPage.getEmailErrorMessage();
    expect(actualEmailErrorMessage).toBe(expectedEmailErrorMessage);
  });
});

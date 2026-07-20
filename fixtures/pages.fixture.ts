import { test as base } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AuthApiClient } from '../api-clients/AuthApiClient';
import { LoginCredentials } from '../test-data/types';
import { request as playwrightRequest } from '@playwright/test';

type Fixtures = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
  freshUser: LoginCredentials;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  freshUser: async ({}, use) => {
    const apiContext = await playwrightRequest.newContext({
      baseURL: process.env.API_BASE_URL,
    });
    const authApiClient = new AuthApiClient(apiContext);

    const email = faker.internet.email();
    const password = faker.internet.password({ length: 12, memorable: false }) + 'A1!';

    await authApiClient.register({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email,
      password,
    });

    await apiContext.dispose();
    await use({ email, password });
  },
});

export { expect } from '@playwright/test';
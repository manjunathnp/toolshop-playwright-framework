import { test as base, request as playwrightRequest } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AuthApiClient } from '../api-clients/AuthApiClient';
import { LoginCredentials } from '../test-data/types';

type ApiFixtures = {
  authApiClient: AuthApiClient;
  freshUser: LoginCredentials;
};

export const test = base.extend<ApiFixtures>({
  authApiClient: async ({}, use) => {
    const apiContext = await playwrightRequest.newContext({
      baseURL: process.env.API_BASE_URL,
    });
    const authApiClient = new AuthApiClient(apiContext);
    await use(authApiClient);
    await apiContext.dispose();
  },

  freshUser: async ({ authApiClient }, use) => {
    const email = faker.internet.email();
    const password = 'Welcome@123'; // meets: uppercase, lowercase, number, symbol, 8+ chars

    await authApiClient.register({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email,
      password,
    });

    await use({ email, password });
  },
});

export { expect } from '@playwright/test';
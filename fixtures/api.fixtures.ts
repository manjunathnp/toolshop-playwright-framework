import { test as base, request as playwrightRequest } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AuthApiClient } from '../api-clients/AuthApiClient';
import { LoginCredentials } from '../test-data/types';
import { ProductsApiClient } from '../api-clients/ProductsApiClient';

type ApiFixtures = {
  authApiClient: AuthApiClient;
  freshUser: LoginCredentials;
  productsApiClient:ProductsApiClient;
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

  productsApiClient: async({}, use) => {
    const apiContext = await playwrightRequest.newContext({
      baseURL: process.env.API_BASE_URL,
    });
    const productsApiClient = new ProductsApiClient(apiContext);
    await use(productsApiClient);
    await apiContext.dispose();
  },

  freshUser: async ({ authApiClient }, use) => {
    const email = faker.internet.email();
    const password = faker.internet.password({ length: 12, memorable: false }) + 'A1!';

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
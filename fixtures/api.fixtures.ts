import { test as base, request as playwrightRequest } from '@playwright/test';
import { AuthApiClient } from '../api-clients/AuthApiClient';

type ApiFixtures = {
  authApiClient: AuthApiClient;
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
});

export { expect } from '@playwright/test';
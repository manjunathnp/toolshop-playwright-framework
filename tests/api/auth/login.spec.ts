import { test, expect } from "../../../fixtures/api.fixtures";
import { customer2User } from '../../../test-data/staticUsers';

test("login via API returns access token", async ({ authApiClient }) => {
  const response = await authApiClient.login(
    customer2User.email,
    customer2User.password,
  );
  expect(response.access_token).toBeTruthy();
  expect(response.token_type).toBe("bearer");
  expect(response.expires_in).toBeGreaterThan(0);
});

test('getCurrentUser returns real user profile', async ({ authApiClient }) => {
  const loginResponse = await authApiClient.login(
    customer2User.email, 
    customer2User.password
  );
  const user = await authApiClient.getCurrentUser(loginResponse.access_token);

  expect(user.email).toBe(customer2User.email);
  expect(user.first_name).toBeTruthy();
});

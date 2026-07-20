    import { test, expect } from '../../../fixtures/api.fixtures';
    import { customerUser } from '../../../test-data/staticUsers';

    test('login via API returns access token', async ({ authApiClient }) => {
    const response = await authApiClient.login(customerUser.email, customerUser.password);
    expect(response.access_token).toBeTruthy();
    expect(response.token_type).toBe('bearer');
    expect(response.expires_in).toBeGreaterThan(0);
    });
import { test, expect } from '../../../fixtures/api.fixtures';

test('getAllProducts returns a list of products', async({ productsApiClient })=>{
    const products = await productsApiClient.getAllProducts();

    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
    expect(products[0].price).toBeGreaterThan(0);
});
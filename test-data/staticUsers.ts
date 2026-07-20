import { LoginCredentials } from "./types";

export const customerUser: LoginCredentials = {
    email: process.env.TEST_CUSTOMER_EMAIL || 'customer@practicesoftwaretesting.com',
    password: process.env.TEST_CUSTOMER_PASSWORD || 'welcome01'
}

export const customer2User: LoginCredentials = {
    email: process.env.TEST_CUSTOMER2_EMAIL || 'customer2@practicesoftwaretesting.com',
    password: process.env.TEST_CUSTOMER2_PASSWORD || 'welcome01'
}

export const adminUser: LoginCredentials = {
    email: process.env.TEST_ADMIN_EMAIL || 'admin@practicesoftwaretesting.com',
    password: process.env.TEST_ADMIN_PASSWORD || 'welcome01'
}

export const invalidUser: LoginCredentials = {
    email: process.env.TEST_INVALID_EMAIL || 'invalidemail@practicesoftwaretesting.com',
    password: process.env.TEST_INVALID_PASSWORD || 'invalidpassword'
}
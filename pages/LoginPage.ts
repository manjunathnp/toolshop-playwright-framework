import { Page } from '@playwright/test';

export class LoginPage{

    constructor(private page:Page) {}

    async login(email:string, password:string){
        await this.page.getByTestId('email').fill(email);
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-submit').click();
    }
}
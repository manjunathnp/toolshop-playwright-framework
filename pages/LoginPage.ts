import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    async login(email:string, password:string){
        await this.page.getByTestId('email').fill(email);
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-submit').click();
    }

    async getErrorMessage():Promise<string|null>{
        const errorLocator = this.page.getByTestId('login-error');
        return await errorLocator.textContent();
    }
}
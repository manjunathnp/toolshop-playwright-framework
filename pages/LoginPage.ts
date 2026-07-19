import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    private emailInput = this.page.getByTestId('email');
    private passwordInput = this.page.getByTestId('password');
    private loginButton = this.page.getByTestId('login-submit');
    private loginErrorLocator = this.page.getByTestId('login-error');

    async login(email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage():Promise<string|null>{
        return await this.loginErrorLocator.textContent();
    }
}
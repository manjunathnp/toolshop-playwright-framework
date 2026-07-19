import { BasePage } from './BasePage';

export class LoginPage extends BasePage{

    private emailInput = this.page.getByTestId('email');
    private passwordInput = this.page.getByTestId('password');
    private loginButton = this.page.getByTestId('login-submit');
    private loginErrorLocator = this.page.getByTestId('login-error');
    private emailErrorLocator = this.page.getByTestId('email-error');
    private passwordErrorLocator = this.page.getByTestId('password-error');

    async login(email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getLoginErrorMessage():Promise<string|null>{
        return await this.loginErrorLocator.textContent();
    }

    async getEmailErrorMessage():Promise<string|null>{
        return await this.emailErrorLocator.textContent();
    }

    async getPasswordErrorMessage():Promise<string|null>{
        return await this.passwordErrorLocator.textContent();
    }
    
}
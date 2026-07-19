import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage{

    private firstNameInput = this.page.getByTestId('first-name');
    private lastNameInput = this.page.getByTestId('last-name');
    private dobInput = this.page.getByTestId('dob');
    private countryInput = this.page.getByTestId('country');
    private postalCodeInput = this.page.getByTestId('postal_code');
    private houseNumberInput = this.page.getByTestId('house_number');
    private streetInput = this.page.getByTestId('street');
    private cityInput = this.page.getByTestId('city');
    private stateInput = this.page.getByTestId('state');
    private phoneInput = this.page.getByTestId('phone');
    private emailInput = this.page.getByTestId('email');
    private passwordInput = this.page.getByTestId('password');
    private registerButton = this.page.getByTestId('register-submit');

    
    async register(firstName:string, lastName:string, dob:string, country:string,
    postalCode:string, houseNumber:string, street:string, city:string, state:string, phone:string,
    email:string, password:string ){
        await this.firstNameInput.fill(firstName); 
        await this.lastNameInput.fill(lastName); 
        await this.dobInput.fill(dob);   
        await this.countryInput.selectOption({label: country});
        await this.postalCodeInput.fill(postalCode);
        await this.houseNumberInput.fill(houseNumber);
        await this.streetInput.fill(street);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.phoneInput.fill(phone);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }
}

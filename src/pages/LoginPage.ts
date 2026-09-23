import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    private readonly inputEmail: Locator;
    private readonly inputPassword: Locator;
    private readonly buttonLogin: Locator;
    private readonly linkForgotPass: Locator;
    private readonly buttonRegistration: Locator;
    private readonly loginErrorMessage: Locator;




    constructor (page: Page){
        super(page);

        this.inputEmail = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.inputPassword = page.getByRole('textbox', { name: 'Password'});
        this.buttonLogin = page.getByRole('button', { name: 'Login' })
        this.linkForgotPass = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.buttonRegistration = page.getByRole('link', { name: 'Continue' });
        this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');

    }


    async goToLoginPage(){
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async doLogin(userName: string, password: string): Promise<void> {
        await this.inputEmail.fill(userName);
        await this.inputPassword.fill(password);
        await this.buttonLogin.click();

    }

    async navigateToRegPage(): Promise<void> {
        await this.buttonRegistration.click();
    }


    async isInvalidLoginErrorDisplayed(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }

    
}
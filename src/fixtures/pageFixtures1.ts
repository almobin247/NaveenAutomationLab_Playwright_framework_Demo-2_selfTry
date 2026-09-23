import {test as baseTest} from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';



type fixture = {
    basePage: BasePage;
    loginPage: LoginPage;
    homePage: HomePage;

}


let test = baseTest.extend<fixture>({

    basePage: async({ page }, use)=> {
       let basePage = new BasePage(page);
       await use(basePage);
    },

    loginPage: async({ page }, use)=> {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async({ page }, use)=> {
        let homePage = new HomePage(page);
        await use(homePage);
    }

});


export { test };
export { expect} from '@playwright/test';
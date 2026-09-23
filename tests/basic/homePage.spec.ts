import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { HomePage } from "../../src/pages/HomePage";

let lp: LoginPage;
let hp: HomePage;

test.beforeEach(async( {page} )=> {
    lp = new LoginPage(page);
    hp = new HomePage(page);


    let spinner = page.locator('.loader');
    spinner.isVisible()

    //await page.goto('com/opencart/index.php?route=account/login')
    await lp.goToLoginPage();
    await lp.doLogin('pwapril@pw.com', 'pw123');
})


test('homePage Tile Test', async ({ page })=>{
    let pageTitle = await hp.homePageTitle();

    await page.waitForSelector('.loader', { state: 'hidden' });

    expect(pageTitle).toBe('My Account');

})


test('homePage Headers Test', async()=> {

    let headers: string[] = await hp.HomePageHeaderCount();


    expect (headers).toHaveLength(4);
})
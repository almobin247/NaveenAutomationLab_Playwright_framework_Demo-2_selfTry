import { test, expect } from "../../src/fixtures/pageFixtures2";


test.beforeEach(async( {loginPage} )=> {

    //await page.goto('com/opencart/index.php?route=account/login')
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME, process.env.PASSWORD);
})


test('homePage Tile Test', async ({ homePage })=>{
    let pageTitle = await homePage.homePageTitle();

    expect(pageTitle).toBe('My Account');
})


test('homePage Headers Test', async({ homePage })=> {

    let headers: string[] = await homePage.HomePageHeaderCount();

    expect (headers).toHaveLength(4);
})
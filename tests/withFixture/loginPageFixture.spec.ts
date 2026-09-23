
import { test, expect } from "../../src/fixtures/pageFixtures2";
import { CSVHelper } from "../../src/utilities/CsvUtils";
import { JsonHelper } from  "../../src/utilities/JsonHelper";



test.beforeEach( async ({ loginPage, page })=> {
   await loginPage.goToLoginPage();
   //await page.goto('opencart/index.php?route=account/login')
}) 

test ('login functionality test', async({ loginPage, homePage })=> {
    await loginPage.doLogin(process.env.USERNAME, process.env.PASSWORD);
    expect(await homePage.homePageTitle()).toBe('My Account');
});


test ('Landing to Reg page test', async ({ loginPage }) => {
    await loginPage.navigateToRegPage();

});


let csvData = CSVHelper.readCsv('src/testdata/logindata.csv');
for(let row of csvData) {
    test (`login functionality test for incorrect data from csv - ${row.username}`, async({ loginPage, homePage })=> {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};


let jsonData = JsonHelper.readJson('src/testdata/logindata.json');
for(let row of jsonData) {
    test (`login functionality test for incorrect data from json - ${row.username}`, async({ loginPage, homePage })=> {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
}
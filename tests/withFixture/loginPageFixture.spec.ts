
import { test, expect } from "../../src/fixtures/pageFixtures";
import { CSVHelper } from "../../src/utilities/CsvUtils";
import { JsonHelper } from  "../../src/utilities/JsonHelper";
import { meta, log, testData } from 'reporting-labs';



test.beforeEach( async ({ loginPage, page })=> {
   await loginPage.goToLoginPage();
   //await page.goto('opencart/index.php?route=account/login')
}) 

test ('@regression login functionality test', async({ loginPage, homePage })=> {
    meta({ priority: 'p2', severity: 'minor', owner: 'Mob', story: 'US101', epic: 'ep349', feature: 'f22', issue: 'bug2' })
    
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);

    let pageTitle = await homePage.homePageTitle();

    await log("Home Page Title : ", pageTitle)
    expect(pageTitle).toBe('My Account');
});


test ('@smoke Landing to Reg page test', async ({ loginPage }) => {
    await loginPage.navigateToRegPage();

});


let csvData = CSVHelper.readCsv('src/testdata/logindata.csv');
for(let row of csvData) {
    test (`@ regression login functionality test for incorrect data from csv - ${row.username}`, async({ loginPage, homePage })=> {
        meta({ priority: 'p2', severity: 'minor', owner: 'Mob1', story: 'US101', epic: 'ep349', feature: 'f22', issue: 'bug2' })
        testData(csvData, 'Invalid LoginData');
    

        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};


let jsonData = JsonHelper.readJson('src/testdata/logindata.json');
for(let row of jsonData) {
    test (`@ regressionlogin functionality test for incorrect data from json - ${row.username}`, async({ loginPage, homePage })=> {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
}
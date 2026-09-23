import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";


let lp: LoginPage;


test.beforeEach( async ({ page })=> {
   lp = new LoginPage(page);
   await page.goto('opencart/index.php?route=account/login')
}) 

test ('login functionality test', async()=> {
    await lp.doLogin('pwapril@pw.com', 'pw123');
});


test ('Landing to Reg page test', async () => {
    await lp.navigateToRegPage();
});

import { test, expect } from '@playwright/test';
import { ApiHelper } from "../../src/api/apiHelper";



test('create Promo API test', async ({ page, request }) => {
    await page.route('**/*', async (route) => {

        const api = route.request();
        const response = await route.fetch();

        if (api.url() === 'https://www.t-mobile.com/fpid/v2/id') {

        console.log(api.method());
        console.log('URL is : ', await api.url());
        console.log('Hearers are : ', await api.allHeaders());
        console.log('Request Body is : ', await api.postDataJSON());

        }

        await route.continue();
    })

    await page.goto('https://www.t-mobile.com/search?q=iphone+18+pro+max&INTNAV=tNav%3ASearch%3APopular&qs=true&sortOption=relevancy');
})